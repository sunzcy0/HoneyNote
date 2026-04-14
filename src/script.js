

function generateId() {
  const timesTamp = Date.now();
} // Generate an Id depending on the moment that the function is executed

//CRUD Functions: Create, Read, Update, Delete. 

function createNote(content, title) {
  const trimmedContent = content.trim(); 
  if (trimmedContent === "") {
    return "Error: El contenido no puede estar vacio."
  }

  const noteId = generateId(); 
  const currentTime = Date.now();
  const noteTitle = title || "Note"; 
  const noteExcerpt = content.length > 100 ? `${content.slice(0,100)}...` : content; 

  const noteInfo = `
  ID: ${noteId} | Title: ${noteTitle} | Content: ${content} | Excerpt: ${noteExcerpt}| Created: ${currentTime} | Updated: ${currentTime}
  `; 

  return noteInfo; 
}

function updateNote(noteId, newContent) {

  if (noteId === undefined || noteId === null || noteId === " ") {

  }
  const trimmedContent = newContent.trim(); 
  if (trimmedContent === " ") {
    return "Error: El contenido no puede estar vacio."
  }

  const currentTime = Date.now();
  const noteTitle = title || "Note"; 
  const noteExcerpt = newContent.length > 100 ? `${newContent.slice(0,100)}...` : newContent; 

  const updateNoteInfo = `
  ID: ${noteId} | Title: ${noteTitle} | Content: ${newContent} | Excerpt: ${noteExcerpt}| Created: ${currentTime} | Updated: ${currentTime}
  `; 

  return noteInfo; 
}

function deleteNote(noteId) {
  if (noteId === undefined || noteId === null || noteId === " ") {
    return "Error: ID invalido"
  }

  const message = `Nota con ID: ${noteId}, fue eliminada`; 

  return message; 
}

function listNotes() {
  const message = "Listando todas las notas disponibles"; 
  return message; 
}

//Ejemplo 1: Crear nota
console.log("------ CREAR NOTA ------"); 
const nota1 = createNote("#Mi primera nota \nEste es el contenido de mi primera nota en Markdown. "); 
console.log(nota1); 

//Ejemplo 2: Crear nota con titulo personalizado
console.log("\n ------ CREAR NOTA CON TITULO ------"); 
const nota2 = createNote("Contenido de la segunda nota. ", "Nota importante"); 
console.log(nota2); 

//Ejemplo 3: Intentar crear nota vacia. Probando validacion. 
console.log("\n ------ VALIDACION DE NOTA VACIA ------"); 
const notaVacia = createNote(" "); 
console.log(notaVacia); 
