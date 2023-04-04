document.getElementById("comprar").disabled = true
document.getElementById("targeta").style.display = 'none';
document.getElementById("comprar2").style.display = 'none';
document.getElementById("telefono").style.display = 'none';
document.getElementById("nombrecompro").style.display = 'none';

document.getElementById("log").onclick = function(){
    let result = document.getElementById("search").value 
    console.log(result)
    document.getElementById("comprar").disabled = false
    
    let libros = {
        nombre: '',
        fecha: ' ',
        autor: ' '
    }

    let ok = result.toLowerCase()

    switch(ok){

        case "mortadelo y filemon":

            libros.nombre= "Mortadelo y Filemon"
            libros.fecha = '1990'
            libros.autor = "Francisco Ibáñez"
            console.log(libros)
        document.getElementById("nombre").textContent = libros.nombre;
        document.getElementById("fecha").textContent = libros.fecha;
        document.getElementById("autor").textContent = libros.autor;
        var img = document.getElementById("imagen aquí"); 
        img.src = 'https://www.penguinlibros.com/es/1917085-large_default/mortadelo-y-filemon-da-vinci-el-pintamona-lisa-magos-del-humor-198.jpg'; 
        
        break;

        case "el diario de greg":

            libros.nombre= "Diario de greg"
            libros.fecha = '2007'
            libros.autor = "Jeff Kinney"
            console.log(libros)
        document.getElementById("nombre").innerHTML = libros.nombre;
        document.getElementById("fecha").textContent = libros.fecha;
        document.getElementById("autor").textContent = libros.autor;
        var img = document.getElementById("imagen aquí"); 
        img.src = 'https://www.liberespacio.com/wp-content/uploads/2020/10/9788427216747.jpg'; 
        
        break;

        case "don quijote":

            libros.nombre= "Don Quijote"
            libros.fecha = '1605'
            libros.autor = "Miguel de Cervantes"
            console.log(libros)
        document.getElementById("nombre").textContent = libros.nombre;
        document.getElementById("fecha").textContent = libros.fecha;
        document.getElementById("autor").textContent = libros.autor;
        var img = document.getElementById("imagen aquí"); 
        img.src = 'https://www.penguinlibros.com/es/1478257/don-quijote-de-la-mancha-coleccion-alfaguara-clasicos.jpg'; 
        
        break;

        case "head first java":

        libros.nombre= "head first java"
        libros.fecha = ' 2003'
        libros.autor = "O'Reilly"
        console.log(libros)
    document.getElementById("nombre").textContent = libros.nombre;
    document.getElementById("fecha").textContent = libros.fecha;
    document.getElementById("autor").textContent = libros.autor;
    var img = document.getElementById("imagen aquí"); 
    img.src = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51OQ0Cj7V6L.jpg'; 
    break;

    default:
        document.getElementById("nombre").textContent = "No ha buscado nada"
        document.getElementById("comprar").disabled = true
        break;
    }
}

document.getElementById("comprar").onclick = function(){
    document.getElementById("targeta").style.display = 'flex';
    document.getElementById("telefono").style.display = 'flex';
    document.getElementById("nombrecompro").style.display = 'flex';
//nombrecompro
    let libro = document.getElementById("search").value
    /*
    let targeta =document.getElementById("targeta").value
    let telefono =document.getElementById("telefono").value
    */

    document.getElementById("nombrecompro").textContent = "Quieres comprar: "+libro
    document.getElementById("comprar2").style.display = 'flex';
    document.getElementById("comprar").style.display = 'none';


}

document.getElementById("comprar2").onclick = function(){

    let targeta =document.getElementById("targeta").value
    let telefono =document.getElementById("telefono").value
    let libro = document.getElementById("search").value

    console.log(targeta)
    console.log(telefono)

    document.getElementById("targeta").style.display = 'none';
document.getElementById("comprar2").style.display = 'none';
document.getElementById("telefono").style.display = 'none';
document.getElementById("comprar").style.display = 'flex';
document.getElementById("nombrecompro").textcontent= "Comprado!";
alert("el libro ha sido comprado. Telefono: "+telefono+" Targeta:"+targeta+" Libro: "+libro)
document.getElementById("nombrecompro").style.display = 'none';
}