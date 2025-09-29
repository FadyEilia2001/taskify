## ✅ Planning Docs / Notes to Create Before Coding
- Feature List → what the app must do (MVP) and possible stretch goals.
  
- Data Model → define objects (Project, Todo) and their properties.
- Module Responsibility Map → which module handles which logic.
- UI Wireframe / Layout Sketch → rough idea of how the app looks.
- User Flow → how a user will interact step by step (add todo, edit, delete, etc.).
- State Management Plan → how data is stored, updated, and synced with UI.
- Storage Plan → what gets saved in localStorage, and in what format (JSON structure).
- Event Plan → list key events (button clicks, form submits, project switching).
- Error Handling Plan → what happens if data is missing, invalid, or empty.
- Styling Notes → colors, typography, spacing system (optional at this stage, but helps).
- Stretch Ideas Parking Lot → cool extra features you’d like to add later, but won’t distract you from the MVP.


## Taskify – Planning Document

### 1. Feature List (MVP)
- Add a todo (title, description, due date, priority).
  
- Edit a todo.
- Delete a todo.
- Mark todo as complete.
- View todos by project.
- Create/delete projects.
- Save/load todos + projects from localStorage.

**Stretch Goals**
- Add notes/checklists to todos.
  
- Search or filter todos.
- Sort by due date or priority.
- Add categories/tags.
- Responsive design polish.

---

### 2. Data Model
- **Todo Object**: title, description, dueDate, priority, completed.
  
- **Project Object**: name, list of todos.
- **App State**: activeProject, projects array.

---

### 3. Module Responsibility Map
- **Projects.js**: create/manage projects.
  
- **Todo.js**: create/manage todo objects.
- **UI.js**: DOM rendering + event listeners.
- **Storage.js**: save/load from localStorage.
- **main.js**: entry point, init app.

---

### 4. UI Wireframe / Layout Sketch
- **Sidebar**: Project list + add project button.
  
- **Main Area**: Todos for selected project.
- **Todo Form**: add/edit todo.

---

### 5. User Flow
1. User loads app → default project created.
   
2. User adds project → sidebar updates.
3. User selects project → todos displayed.
4. User adds/edit/deletes todos.
5. Changes auto-save to localStorage.

---

### 6. State Management Plan
- Keep projects in memory.
  
- Track active project.
- Every action updates memory + saves to localStorage.

---

### 7. Storage Plan
- Save projects array as JSON.
  
- Restore on app load.
- Fallback: empty array if no data.

---

### 8. Event Plan
- Add project button click.
  
- Project select click.
- Add todo form submit.
- Edit todo button click.
- Delete todo button click.
- Toggle complete checkbox.

---

### 9. Error Handling Plan
- Prevent empty titles.
  
- Validate date input.
- Fallback UI if no todos.
- Safe parse localStorage.

---

### 10. Styling Notes
- Color scheme.
  
- Typography.
- Spacing + grid system.
- Priority color coding.

---

### 11. Stretch Ideas Parking Lot
- Drag and drop todos between projects.
  
- Reminders/notifications.
- Dark/light theme toggle.
- Share/export projects.