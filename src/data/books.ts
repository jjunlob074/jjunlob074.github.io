import type { BooksProps } from "../types/books.props";

export const BOOKS: BooksProps[] = [
    {
        picture: "/images/portadas/html.webp", // Imagen aleatoria de Lorem Picsum
        title: "100 preguntas comunes de HTML",
        description: "¿Estás listo para llevar tus habilidades de desarrollo web al siguiente nivel? Este libro te presenta 100 preguntas esenciales sobre HTML5 que desglosan los conceptos clave de manera clara y accesible. Desde los fundamentos hasta las técnicas más avanzadas, cada pregunta te guiará a través de los aspectos más críticos de HTML5, ayudándote a comprender y aplicar cada tema en proyectos reales. ",
        technologies: ["HTML"],
        link: [new URL("https://www.amazon.com/Gran-Gatsby-F-Scott-Fitzgerald/dp/0743273567")]
    },
    {
        picture: "/images/portadas/css.webp", // Imagen aleatoria de Lorem Picsum
        title: "100 preguntas comunes de CSS",
        description: "¿Estás listo para llevar tus habilidades de diseño web al siguiente nivel? Este libro te presenta 100 preguntas esenciales sobre CSS que desglosan los conceptos clave de manera clara y accesible. Desde los fundamentos hasta las técnicas más avanzadas, cada pregunta te guiará a través de los aspectos más críticos de CSS, ayudándote a comprender y aplicar cada tema en tus proyectos",
        technologies: ["CSS"],
        link: [new URL("https://www.amazon.com/Cien-a%C3%B1os-soledad-Gabriel-Garc%C3%ADa/dp/8437603306")]
    },
    {
        picture: "/images/portadas/javascript.webp", // Imagen aleatoria de Lorem Picsum
        title: "100 preguntas comunes de JavaScript",
        description: "¿Estás listo para llevar tus habilidades de programación web al siguiente nivel? Este libro te presenta 100 preguntas esenciales sobre JavaScript que desglosan los conceptos clave de manera clara y accesible. Desde los fundamentos hasta las técnicas más avanzadas, cada pregunta te guiará a través de los aspectos más críticos de JavaScript, ayudándote a comprender y aplicar cada tema en tus proyectos.",
        technologies: ["JavaScript"],
        link: [new URL("https://www.amazon.com/1984-George-Orwell/dp/0451524934")]
    },
    {
        picture: "/images/portadas/php.webp", // Imagen aleatoria de Lorem Picsum
        title: "Conceptos Importantes de PHP",
        description: "¡Descubre el poder de PHP y transforma tu carrera como desarrollador web con este libro completo! Desde los fundamentos hasta técnicas avanzadas, este recurso está diseñado para llevarte de la mano a través de cada aspecto del lenguaje. Aprende a crear aplicaciones dinámicas, gestionar bases de datos de manera eficiente y dominar la programación orientada a objetos.",
        technologies: ["PHP", "SQL"],
        link: [new URL("https://www.amazon.com/Orgullo-prejuicio-Jane-Austen/dp/8491050192")]
    },
    {
        picture: "/images/portadas/sql.webp", // Imagen aleatoria de Lorem Picsum
        title: "100 Preguntas Comunes de SQL",
        description: "100 Preguntas Comunes de SQL es una obra integral diseñada para quienes desean adquirir un conocimiento profundo sobre SQL y su aplicación en diversos contextos. Desde los conceptos básicos hasta técnicas avanzadas, este libro cubre una amplia gama de temas, incluyendo la creación y diseño de bases de datos, la manipulación de datos a través de consultas, actualizaciones y eliminaciones, así como la optimización del rendimiento y la gestión de transacciones.",
        technologies: ["SQL"],
        link: [new URL("https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315001")]
    },
    {
        picture: "/images/portadas/linux.webp", // Imagen aleatoria de Lorem Picsum
        title: "100 Preguntas Comunes de Linux y Bash",
        description: "¿Estás listo para llevar tus habilidades en Linux y Bash al siguiente nivel? Este libro es tu puerta de entrada a un mundo de conocimiento profundo y práctico sobre uno de los sistemas operativos más poderosos del mundo. Desde conceptos básicos hasta técnicas avanzadas, cada capítulo está diseñado para ofrecerte herramientas y conocimientos aplicables que mejorarán tu eficacia en la administración de sistemas y desarrollo de software.",
        technologies: ["Linux", "Bash"],
        link: [new URL("https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315001")]
    },
    {
        picture: "/images/portadas/algoritmos.webp", // Imagen aleatoria de Lorem Picsum
        title: "20 Algoritmos que todo desarrollador debe conocer",
        description: "Este libro es una introducción práctica a los algoritmos y estructuras de datos, diseñado para programadores de todos los niveles. A través de explicaciones claras y concisas, los lectores aprenderán a resolver problemas comunes en programación utilizando una variedad de algoritmos.",
        technologies: ["Python", "Data Structures", "Algorithms"],
        link: [new URL("https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315001")]
    }
];
