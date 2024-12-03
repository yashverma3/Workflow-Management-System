# Workflow Management System  

A robust and feature-rich workflow management platform for efficient task and project management. This application offers tools for seamless collaboration, task tracking, analytics, and more, making it ideal for teams and individuals seeking an organized workflow.

## 🌐 Live Website  
Explore the deployed application here: [Workflow Management System](https://workflow-management-system-sepia.vercel.app/) 

## 🚀 Key Features  
- 🏢 **Workspaces**: Create and manage multiple workspaces for organizing projects.  
- 📊 **Projects**: Group related tasks under projects for better organization.  
- ✅ **Task Management**: Add, edit, delete, and track tasks with detailed status updates.  
- 📋 **Kanban Board View**: Visualize and organize tasks for streamlined project tracking.  
- 🗃️ **Data Table View**: Display and manage tasks in a structured tabular format.  
- 📅 **Calendar View**: Schedule and track tasks with an interactive calendar interface.  
- ✉️ **Invite System**: Collaborate with team members by inviting them to workspaces.  
- ⚙️ **Workspace and Project Settings**: Manage workspace/project configurations with customizable options.  
- 🖼️ **Image Uploads**: Add avatars or attachments with seamless image upload functionality.  
- 🔍 **Advanced Search and Filtering**: Quickly locate tasks and projects with powerful filtering and search options.  
- 📈 **Analytics Dashboard**: Gain insights into workspace and project performance.
- 🔒 **Authentication**: Secure OAuth and email-based login system for user authentication.  
- 📱 **Responsive Design**: Fully optimized for mobile and desktop devices.  
- 🛡️ **Route Protection**: Secure endpoints to prevent unauthorized access.  
- 🚀 **API Development**: Integrated Hono.js for efficient backend API services.  

## 🛠️ Technologies Used  
### **Frontend**  
- **Next.js 14**: High-performance React framework for building modern web applications.  
- **TypeScript**: Ensuring type safety and improved developer productivity.  
- **TailwindCSS**: Rapid and consistent styling with utility-first CSS.  
- **Shadcn UI**: Sleek and reusable UI components for consistent design.  

### **Backend**  
- **Appwrite**: Powerful backend integration for managing database, authentication, and storage.  
- **Hono.js**: High-performance framework for building APIs.  

### **Additional Tools**  
- **Git**: Version control for efficient collaboration and source code management.
- **Vercel**: Reliable hosting platform for deployment with automatic builds and scaling.  

## 🛠️ Installation  
Follow these steps to set up the project locally:  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yashverma3/Workflow-Management-System.git
    ```

2. Navigate to the project directory:
    ```bash 
    cd workflow-management-system
    ```

3. Install dependencies:
    ```bash 
    bun install
    ```

4. Configure environment variables:
    - Create a `.env.local` file in the root directory using the provided `.env.example` as a template.
    - Add required environment variables such as Appwrite credentials, API keys, etc.

5. Start the development server:
    ```bash 
    bun run dev
    ```

6. Open your browser and navigate to http://localhost:3000.