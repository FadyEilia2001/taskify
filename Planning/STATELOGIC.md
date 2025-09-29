Got it ✅ --- here's the module interaction map + explanation in Markdown, with a deeper dive into state.js (since that's the one that feels fuzzy).

# Taskify -- Module Interaction Map

+-----------+ +-----------+ +-----------+ +-----------+

| main.js | -----> | Storage | -----> | state | -----> | render |

| (boot) | | (load) | | (in-mem) | | (paint) |

+-----+-----+ +-----+-----+ +-----+-----+ +-----+-----+

| ^ | |

| | | save() |

| | +-----v-----+ |

| | | Projects | |

| | | / Todo | |

| | +-----+-----+ |

| | | |

| | v |

| +--------------+ events <--------------+

| (bind UI, dispatch)

|

+--> helpers.js (DOM creators, formatters, tiny pure utils)

---

## Module Responsibilities

### **`main.js`**

- Entry point.

- On app load:

1\. `Storage.load()` → fetch state from `localStorage`.

2\. Hydrate the **`state`** object.

3\. Call `render.app(state)` to draw UI.

4\. Attach listeners via `events.bind()`.

---

### **`state.js`**

This is the **single source of truth** for the whole app.

Think of it as your app's in-memory **database**.

- Holds the current data:

```js

{

projects: [ { id, name, todos: [...] }, ... ],

activeProjectId: "uuid-123" // or null

}

- Provides getters & setters so other modules don't mess with raw data directly:

getProjects()

getActiveProject()

setActiveProject(id)

- Why important?

- Keeps data centralized.

- Avoids spaghetti (no random array mutations all over).

- Easy to Storage.save(state) since all data lives here.

- Lets you separate data logic from UI logic.

⸻

Projects.js / Todo.js

- Pure domain logic.

- Functions like:

- createProject(name)

- renameProject(id, newName)

- addTodo(projectId, todoData)

- toggleTodoComplete(projectId, todoId)

- They only mutate state, nothing else.

⸻

Storage.js

- Handles persistence to/from localStorage.

- save(state) → serialize to JSON.

- load() → parse JSON (with safe fallback if none exists).

- Keeps localStorage logic separate from your app code.

⸻

render.js

- Reads state and creates DOM elements.

- Uses helpers.js for repetitive tasks (e.g., makeButton, formatDate).

- Does not mutate state or storage.

⸻

events.js

- Listens for user interactions:

- Click "Add Todo"

- Click "Delete Project"

- Submit form

- On each event:

1\. Calls domain logic (Projects.js, Todo.js).

2\. Updates state.

3\. Storage.save(state).

4\. Calls render.*() to update the UI.

⸻

helpers.js

- Small, reusable functions:

- createElement(tag, className, text)

- formatDate(dateStr)

- uid() for unique IDs

⸻

Common Flows

Add Project

UI click "Add Project"

-> events.js handleAddProject()

-> Projects.createProject(name) // mutates state.projects

-> Storage.save(state)

-> render.sidebar(state) // update sidebar

Switch Project

UI click project in sidebar

-> events.js setActive(projectId)

-> state.setActiveProject(projectId)

-> Storage.save(state)

-> render.main(state) // redraw todos for new project

Add Todo

Submit "Add Todo" form

-> events.js handleAddTodo(formData)

-> Todo.addTodo(activeProjectId, data)

-> Storage.save(state)

-> render.todos(state)

Toggle Complete

Click todo checkbox

-> events.js handleToggleComplete(todoId)

-> Todo.toggleComplete(projectId, todoId)

-> Storage.save(state)

-> render.todoRow(state, todoId)

⸻

Key Rules

- One source of truth → state.js

Everything reads/writes here.

- Domain logic separate from UI

(Projects/Todo manage data, Render manages DOM).

- Events are glue

(user actions → state change → save → UI update).

- Render is pure

No side effects, only builds UI from state.

⸻

