# Llama Project Assistant Guide

## Purpose
This document explains how to use an open-source Llama-style model as the foundation for a project-management and code-generation assistant.

It is intended for:
- developers with multiple website, app, or custom software projects
- people who want a local or self-hosted LLM and toolchain
- anyone who wants to make the model work with project files, docs, and reports

---

## Recommended model
For your use case, use one of these:
- `Llama 3 7B` — good balance for general instruction following and planning
- `Llama 3 13B` — stronger reasoning and better code assistance if your machine can support it
- `Code Llama 7B` — best if code writing is the main priority

If you want better code accuracy, choose `Code Llama`.
If you want more general planning, reporting, and project management, choose `Llama 3`.

---

## Suggested runtime options
### Option 1: `llama.cpp` (Windows local)
`llama.cpp` is the easiest way to run Llama-style models locally on Windows.

1. Install Git:
   - https://git-scm.com/download/win
2. Install Visual Studio Build Tools or `g++` if not already installed
3. Clone and build:
   ```powershell
   git clone https://github.com/ggerganov/llama.cpp.git
   cd llama.cpp
   mkdir build
   cd build
   cmake ..
   cmake --build .
   ```
4. Download a GGUF model file from Hugging Face or another model provider.
5. Run inference:
   ```powershell
   .\main.exe -m ..\models\llama-3-7b.gguf -p "Write a project status report for my website and app projects"
   ```

### Option 2: `text-generation-webui`
This gives a browser interface and supports many models.

1. Install Python 3.11 or 3.12
2. Create a venv:
   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   pip install -U pip
   pip install torch --index-url https://download.pytorch.org/whl/cpu
   pip install text-generation-webui
   ```
3. Start the UI:
   ```powershell
   python server.py
   ```
4. Add the Llama/GGUF model in the UI or put it in `models/`

### Option 3: `Hugging Face Transformers` + `accelerate`
Use this if you want Python integration and custom code.

1. Create and activate a virtual environment.
2. Install:
   ```powershell
   pip install transformers accelerate sentence-transformers
   ```
3. Example script:
   ```python
   from transformers import AutoTokenizer, AutoModelForCausalLM

   tokenizer = AutoTokenizer.from_pretrained("TheBloke/llama-3-7b")
   model = AutoModelForCausalLM.from_pretrained("TheBloke/llama-3-7b", device_map="auto")

   prompt = "Generate a progress report for my website and software projects."
   inputs = tokenizer(prompt, return_tensors="pt")
   outputs = model.generate(**inputs, max_new_tokens=200)
   print(tokenizer.decode(outputs[0], skip_special_tokens=True))
   ```

---

## Setup workflow for your projects
### 1. Collect your project data
Your best training or retrieval data is your own project content:
- source code repositories
- README files
- architecture and design documents
- project specs
- issue tracker tickets
- meeting notes and task lists
- changelogs and release notes
- deployment scripts and docs

### 2. Build a retrieval layer (recommended)
Instead of training a full LLM, use retrieval augmented generation (RAG):
- ingest your project docs into a vector database
- embed files with `sentence-transformers`
- use the LLM to answer questions from the retrieved context

This is the most practical way to make the model understand your projects.

### 3. Keep the prompt focused
Use prompt templates for:
- status summaries
- task lists
- bug reports
- feature proposals
- code generation requests
- release notes

Example prompt:
```
You are a project assistant for multiple web and app projects.
Use the following project summary and tasks, then generate a clear status report.

Project summary:
- Project A: React website, deployment on Vercel
- Project B: Mobile app with Flutter
- Project C: Custom software with Node.js backend

Recent updates:
- Task 1 completed
- Task 2 pending

Output:
1. Summary
2. Current status
3. Next action items
4. Risks
```

---

## Training vs fine-tuning vs prompt + retrieval
### Fine-tuning
- fine-tuning is expensive and often unnecessary for project assistants
- use it only if you want a truly customized model voice or domain-specific instructions
- for Llama, fine-tuning requires specialized libraries and significant compute

### Recommendation
- Start with the pretrained Llama model
- add your own project data through retrieval or prompt engineering
- only fine-tune if you have a large, well-organized dataset and the hardware to do it

---

## Data sources
### Your best data
- Git repos
- Documentation files
- Issue tracker exports
- Requirement documents
- Architecture diagrams
- Confluence / Notion notes
- Emails or chat summaries about the project

### Public data for code + docs
If you need supplemental data, use public sources such as:
- GitHub public repositories
- The Pile
- CodeSearchNet
- Stack Overflow dumps
- Open-source documentation repositories

> Important: always keep your project data private if it contains sensitive or proprietary information.

---

## Practical example: create a project assistant
### Step 1: install runtime
Use `text-generation-webui` or `llama.cpp`.

### Step 2: download model weights
Use a model like `llama-3-7b.gguf` or `code-llama-7b.gguf`.

### Step 3: add your project docs
Create a `data/` folder and put your README, architecture notes, and task files there.

### Step 4: write a simple prompt script
Example:
```python
from pathlib import Path
from transformers import AutoTokenizer, AutoModelForCausalLM

model_name = "TheBloke/llama-3-7b"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name, device_map="auto")

text_files = Path("data").glob("**/*.md")
context = []
for path in text_files:
    context.append(path.read_text(encoding="utf-8"))

prompt = """
You are a project assistant. Use the following documentation to write a short weekly report.

"""
prompt += "\n\n".join(context)

inputs = tokenizer(prompt, return_tensors="pt", truncation=True, max_length=2048)
outputs = model.generate(**inputs, max_new_tokens=200)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

### Step 5: improve with retrieval
To get better results, do not feed all text directly. Instead:
1. split documents into chunks
2. encode chunks with embeddings
3. store them in a vector database
4. retrieve the most relevant chunks for each request
5. send those chunks to the model with the prompt

---

## Recommended next steps
1. Choose a Llama model: `Llama 3 7B` or `Code Llama 7B`
2. Install a runtime: `llama.cpp` or `text-generation-webui`
3. Collect your project docs in one folder
4. Start with prompts and retrieval, not full training
5. Use the model to generate reports, plans, and code suggestions

---

## Notes for Windows users
- Use PowerShell to manage your environment
- Prefer `venv` for Python isolation
- If you use `llama.cpp`, download GGUF models for best compatibility
- If you use `text-generation-webui`, start the server and open the browser interface

---

## Useful links
- https://github.com/ggerganov/llama.cpp
- https://github.com/oobabooga/text-generation-webui
- https://huggingface.co/
- https://github.com/facebookresearch/llama
- https://platform.openai.com/docs/guides/retrieval-augmented-generation
