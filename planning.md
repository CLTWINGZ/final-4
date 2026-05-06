# Agile Planning - Tax Calculator App

## Epic
**Title**: Modernize and Enhance DevOps for the Tax Calculator Application.
**Description**: Transition the existing Tax Calculator from a legacy deployment model to a modern, containerized, and automated CI/CD workflow on IBM Cloud.

## User Stories

### Story 1: Application Containerization
**Title**: Containerize the application using Docker.
**As a** Developer,
**I want to** package the Tax Calculator app into a Docker container,
**So that** it runs consistently across local development, testing, and production environments.
**Acceptance Criteria**:
- A `Dockerfile` is present in the root directory.
- The Docker image builds without errors.
- The application is accessible on port 3000 when running in a container.

### Story 2: IBM Cloud Deployment
**Title**: Deploy the containerized application to IBM Cloud.
**As an** Operations Engineer,
**I want to** host the containerized app on IBM Cloud (K8s/Code Engine),
**So that** the application is globally accessible and scalable.
**Acceptance Criteria**:
- The application is deployed and reachable via a public URL.
- The deployment uses the image from IBM Cloud Container Registry.

### Story 3: Automated Unit Testing
**Title**: Integrate Jasmine unit tests into the CI/CD pipeline.
**As a** QA Engineer,
**I want to** run automated tests on every code change,
**So that** regression bugs are identified immediately.
**Acceptance Criteria**:
- Jasmine tests cover at least 3 distinct tax calculation scenarios.
- The pipeline fails if any Jasmine test fails.

### Story 4: CI/CD Pipeline Orchestration
**Title**: Automate the build-and-deploy process with Tekton.
**As a** DevOps Engineer,
**I want to** use Tekton Pipelines to orchestrate the CI/CD workflow,
**So that** code changes are automatically tested, built, and deployed.
**Acceptance Criteria**:
- Tekton Tasks for cloning, testing, building, and deploying are defined.
- A Tekton Pipeline connects these tasks in the correct order.
