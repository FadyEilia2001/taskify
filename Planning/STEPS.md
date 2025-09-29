# Todo App — Step-by-Step Build Order

## 0) Project scaffold
- [ ] Create Vite app. 
- [ ] Folders: `src/modules` (logic), `src/ui` (render/helpers), `src/styles`, `src/assets`.  
- [ ] Files: `main.js`, `styles.css`, `modules/{projects.js,todos.js,storage.js}`, `ui/{render.js,events.js}`.

---

## 1) Define the data model (logic first, small)
- [ ] Decide shapes:  
  - **Todo**: `id, title, description, dueDate, priority, completed`  
  - **Project**: `id, name, todos[]`  
  - **App state**: `{ projects[], activeProjectId }`
- [ ] Hard-code one sample project with 2–3 todos (no UI yet).

✅ **Milestone test:** `console.log(state)` shows expected shapes.

---

## 2) Storage (localStorage) plumbing
- [ ] Write minimal storage functions: load → fallback to defaults → save.  
- [ ] Manually call `save()` after you mutate state.

✅ **Milestone test:** Reload the page; data persists.

---

## 3) Core pure functions (no DOM yet)
- [ ] Project ops: add, rename, remove, setActive.  
- [ ] Todo ops (within active project): add, edit, toggleComplete, remove.  
- [ ] Keep these pure (return new state or clearly mutate + then save).

✅ **Milestone test:** Call functions in the console; state updates as expected and persists.

---

## 4) Minimal UI scaffold
- [ ] Static skeleton only: header, sidebar (projects), main list area, a single “Add Todo” button.  
- [ ] No modals/forms yet—just areas to render into.

✅ **Milestone test:** Page renders boxes with placeholder text.

---

## 5) One render function (single source of truth)
- [ ] `render(state)`: clears and re-renders sidebar + todo list from state.  
- [ ] No interactions; just correct visual output from data.

✅ **Milestone test:** Changing state then calling `render()` updates UI correctly.

---

## 6) Wire events (progressively)
- [ ] **Project switching:** click a project → set active → save → render.  
- [ ] **Add Todo (quick & dirty):** temporary inline form or prompt → create todo → save → render.  
- [ ] **Toggle complete / delete todo:** buttons in each row → update → save → render.

✅ **Milestone test:** Can switch projects, add/complete/delete; UI always matches state.

---

## 7) Replace prompts with a proper form/modal
- [ ] Build a simple modal (title, description, due date, priority).  
- [ ] Use it for **Add**; reuse for **Edit** (prefill fields).  
- [ ] Validate: require title; optional date; clamp priority values.

✅ **Milestone test:** Add & edit both work and persist.

---

## 8) Priority visuals + basic filters (optional stretch)
- [ ] Color-code priorities in list.  
- [ ] Simple filter buttons (All / Today / This Week) or by priority.

✅ **Milestone test:** Clicking filters changes view only (state unchanged).

---

## 9) UX polish
- [ ] Empty states (“No todos yet”).  
- [ ] Disable actions when no active project.  
- [ ] Keyboard focus traps for modal; `Esc` closes modal; `Enter` submits.  
- [ ] Accessible labels/roles on buttons and lists.

---

## 10) Responsive pass (quick)
- [ ] Stack sidebar under header on small screens.  
- [ ] Increase tap targets.  
- [ ] Prevent overflow on long titles.

---

## 11) Light testing checklist
- [ ] Add/edit/delete todo flows across projects.  
- [ ] Delete a project that has todos (confirm).  
- [ ] Reload persistence sanity check.  
- [ ] Edge cases: long text, empty title (blocked), invalid dates, same project name.

---

## 12) Final cleanup & deploy
- [ ] Remove console logs, name things clearly, small comments.  
- [ ] README with features + screenshots.  
- [ ] Deploy GitHub