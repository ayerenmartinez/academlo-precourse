// 1.- Crear un un arreglo de 5 usuarios que tengan las propiedades name y email
    let array=[{
                name:"erik",
                email:"erik@academlo.com"
               },
               {
                name:"daniel",
                email:"daniel@gmail.com"
               },
               {
                name:"josue",
                email:"jose@academlo.com"
               },
               {
                name:"ismael",
                email:"ismael@academlo.com"
               },
               {
                name:"juliana",
                email:"juliana@academlo.com"
               },
    ];
    console.log(array);
    // 2.- Validar si los usuarios tienen correo de academlo
    console.log(array[0].email.endsWith("@academlo.com"));
    console.log(array[1].email.endsWith("@academlo.com"));
    console.log(array[2].email.endsWith("@academlo.com"));
    console.log(array[3].email.endsWith("@academlo.com"));
    console.log(array[4].email.endsWith("@academlo.com"));