# Candidate Assessment: Application Containerization Task

Welcome to the DevOps/SRE assessment. Your objective is to containerize this React & Node.js application and orchestrate it using Docker and Docker Compose. 

Currently, all Docker configurations have been removed from this repository. You need to implement containerization from scratch following DevOps best practices.

---

## Technical Stack
- **Frontend**: React (SPA)
- **Backend**: Node.js + Express
- **Database**: SQLite (persisted locally within the backend folder at `database/database.sqlite`)

---

## Tasks

### Task 1: Containerize the Backend (`backend/Dockerfile`)
Create a production-ready `Dockerfile` in the `backend/` directory.
- Use an appropriate, official, and lightweight base image (e.g., Node.js Alpine variant).
- Avoid running the application as the `root` user (apply least-privilege security principles).
- Set proper environment variables and working directory.
- Ensure only necessary files are copied (utilize `.dockerignore` to prevent copying `node_modules`, local logs, databases, etc.).
- Expose the necessary port (`3333`).

### Task 2: Containerize the Frontend (`frontend/Dockerfile`)
Create a production-ready, multi-stage `Dockerfile` in the `frontend/` directory.
- **Stage 1 (Build)**: Use Node.js to install dependencies and compile the production build (`npm run build`).
- **Stage 2 (Serve)**: Use a lightweight web server (like Nginx) to serve the compiled static files.
- Optimize the configuration to handle single-page application routing if necessary.
- Expose the default web server port (typically `80`).

### Task 3: Orchestrate with Docker Compose (`docker-compose.yaml`)
Create a `docker-compose.yaml` file in the root of the project to orchestrate the entire application stack.
- **Services**:
  1. `backend`: Build from the `backend/` directory. Ensure the database file `database.sqlite` is persisted on the host using a named Docker volume so that data is not lost when containers are destroyed.
  2. `frontend`: Build from the `frontend/` directory.
  3. *(Optional but Highly Recommended)* `nginx`: A reverse proxy service that routes requests to `/` to the frontend and requests starting with `/api` or to the backend API port, avoiding CORS issues and providing a unified entry point on port `80` (or `8080`).
- Ensure proper startup order using dependencies (`depends_on`).
- Implement appropriate health checks for services.
- Define container restart policies (e.g., `unless-stopped`).

### Task 4: Documentation
Provide clear documentation detailing:
1. How to build and run the entire application using your Docker Compose setup.
2. How you handled database persistence.
3. Any security and optimization techniques you implemented in your Dockerfiles.

---

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Functional Correctness**:
   - The application starts reliably with a single `docker-compose up` command.
   - Users can create, read, update, and delete entries via the web interface.
   - Data persists across container restarts and rebuilds.

2. **Docker Best Practices**:
   - Proper use of multi-stage builds.
   - Minimal image sizes (avoiding bloated layers).
   - Use of `.dockerignore` to keep contexts small.
   - Specific tag pinning (avoiding `latest` tag where possible).

3. **Security**:
   - Containers run with non-root privileges.
   - No sensitive information hardcoded in the configuration.

4. **Code Quality and Architecture**:
   - Clean, well-commented Dockerfiles and Compose configurations.
   - Logical network separation and volume mount design.

---

## How to Submit
1. Implement your solution by creating/modifying files directly in this workspace.
2. Ensure you have tested the build and runtime successfully.
3. Update this repository or create a pull request with your changes.

Good luck!
