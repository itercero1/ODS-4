# Backlog — QuizEdu (ODS 4)

## Información del proyecto

| Campo      | Valor                           |
|------------|---------------------------------|
| Proyecto   | QuizEdu — Minijuego educativo   |
| ODS        | ODS 4 — Educación de Calidad    |
| Equipo     | Alejandro, Ivan y Alberto       |
| Tecnología | HTML · CSS · JavaScript vanilla |


---

## Épicas

| ID | Épica                  | Descripción                                         |
|----|------------------------|-----------------------------------------------------|
| E1 | CRUD de jugadores      | POC: crear, listar, editar y eliminar jugadores     |
| E2 | Minijuego de preguntas | Quiz con temporizador y puntuación (fase siguiente) |
| E3 | Resultados y diplomas  | Historial de partidas y diploma (fase siguiente)    |

---

## E1 — CRUD de jugadores (POC actual)

| ID    | Historia                                                                | Criterios de aceptación                                                   | Prioridad | Estado   | Responsable |
|-------|-------------------------------------------------------------------------|---------------------------------------------------------------------------|-----------|----------|-------------|
| HU-01 | Como docente quiero añadir un jugador con nombre, email, nivel y puntos | Formulario con validación; jugador aparece en la tabla al guardar         | Alta      | ✅ Hecho |  Alejandro    |
| HU-02 | Como docente quiero ver la lista de todos los jugadores                 | Tabla con nombre, email, nivel y puntos; mensaje si no hay ninguno        | Alta      | ✅ Hecho | Alejandro    |
| HU-03 | Como docente quiero editar los datos de un jugador                      | Al pulsar Editar el formulario se rellena; Guardar actualiza el registro  | Alta      | ✅ Hecho | Ivan    |
| HU-04 | Como docente quiero eliminar un jugador                                 | Confirmar antes de borrar; el jugador desaparece de la tabla              | Alta      | ✅ Hecho | Ivan    |
| HU-05 | Como docente quiero buscar jugadores por nombre o email                 | El listado se filtra al escribir; contador muestra cuántos hay            | Media     | ✅ Hecho | Alberto    |
| HU-06 | Como docente quiero filtrar el listado por nivel                        | Select que filtra la tabla; combinable con la búsqueda de texto           | Media     | ⌛ Pendiente | Alejandro    |

---

## E2 — Minijuego de preguntas (fase siguiente)

| ID    | Historia                                                     | Criterios de aceptación                                   | Prioridad | Estado       | Responsable |
|-------|--------------------------------------------------------------|-----------------------------------------------------------|-----------|--------------|-------------|
| HU-07 | Como jugador quiero elegir una categoría de preguntas        | Pantalla con al menos 3 categorías                        | Alta      | 🔲 Pendiente | Alumno 1    |
| HU-08 | Como jugador quiero responder preguntas de opción múltiple   | 4 opciones; verde = acierto, rojo = fallo                 | Alta      | 🔲 Pendiente | Alumno 1    |
| HU-09 | Como jugador quiero ver un temporizador por pregunta         | Cuenta atrás de 15 s; fallo automático al llegar a 0      | Alta      | 🔲 Pendiente | Alumno 1    |
| HU-10 | Como jugador quiero navegar con el teclado                   | Teclas 1-4 eligen opción; Enter confirma; Escape pausa    | Alta      | 🔲 Pendiente | Alumno 1    |

---

## E3 — Resultados y diplomas (fase siguiente)

| ID    | Historia                                                     | Criterios de aceptación                                   | Prioridad | Estado       | Responsable |
|-------|--------------------------------------------------------------|-----------------------------------------------------------|-----------|--------------|-------------|
| HU-11 | Como jugador quiero ver mi puntuación final                  | Pantalla con puntos, aciertos y tiempo empleado           | Alta      | 🔲 Pendiente | Alumno 1    |
| HU-12 | Como jugador quiero un diploma si supero 70 puntos           | Diploma con nombre, puntos y fecha; botón de imprimir     | Media     | 🔲 Pendiente | Alumno 1    |
| HU-13 | Como docente quiero ver el historial de partidas             | Tabla con jugador, categoría, puntos y fecha              | Media     | 🔲 Pendiente | Alumno 3    |

---

## Tabla de seguimiento

| HU    | Descripción corta             | Puntos | Estado |
|-------|-------------------------------|--------|--------|
| HU-01 | Añadir jugador                | 2      | ✅     |
| HU-02 | Listar jugadores              | 2      | ✅     |
| HU-03 | Editar jugador                | 3      | ✅     |
| HU-04 | Eliminar jugador              | 1      | ✅     |
| HU-05 | Buscar por nombre / email     | 2      | ✅     |
| HU-06 | Filtrar por nivel             | 2      | ✅     |
| HU-07 | Selección de categoría        | 3      | 🔲     |
| HU-08 | Preguntas opción múltiple     | 5      | 🔲     |
| HU-09 | Temporizador                  | 3      | 🔲     |
| HU-10 | Teclado en el juego           | 2      | 🔲     |
| HU-11 | Pantalla de resultados        | 2      | 🔲     |
| HU-12 | Diploma                       | 3      | 🔲     |
| HU-13 | Historial de partidas         | 2      | 🔲     |

**Completados: 12 / 32 puntos**

---

## Ramas Git

```
main
├── feature/crud-jugadores   → Alumno 3
├── feature/minijuego        → Alumno 1
└── feature/interfaz         → Alumno 2
```
