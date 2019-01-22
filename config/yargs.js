//Definir dos comandos

//comando crear 'Crear un elemento por hacer'
// --descripcion -d

//comando actualizar  'Actualiza el estado de una tarea'
// --descripcion -d
// completado -c true

// --help

const opts = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer"
  },
  completado: {
    default: true,
    alias: "c",
    desc: "Marca como completado o pendiente la tarea"
  }
};

const argv = require("yargs")
  .command("crear", "Crea un elemento por hacer", opts)
  .command("actualizar", "Actualiza el estado de una tarea", opts)
  .command("borrar", "Borra una de las tareas", opts)
  .help().argv;

module.exports = {
  argv: argv
};
