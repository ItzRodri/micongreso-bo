// Modulo para la pagina de Inscripcion
const InscripcionModule = {
};
// Exportar el módulo para que pueda ser usado en otras páginas
export { InscripcionModule };




// Módulo para la página de administración
const AdminModule = {
    init() {
        new Vue({
            el: "#app",
            data: {
                isLoggedIn: false,
                username: "",
                password: "",
                totalInscriptions: 250,
                inscriptionsByManager: {
                    ger1: 50,
                    ana2: 45,
                    sar3: 40,
                    jar4: 35,
                    ben5: 30,
                    sam6: 50,
                },
                currentPage: "admin",
            },
            methods: {
                login() {
                    if (
                        (this.username === "Kensoh" || this.username === "kensoh") &&
                        this.password === "Krsh2001"
                    ) {
                        this.isLoggedIn = true;
                        this.$nextTick(() => {
                            this.renderChart();
                        });
                    } else {
                        alert("Credenciales incorrectas");
                    }
                },
                renderChart() {
                    const ctx = document
                        .getElementById("inscriptionChart")
                        .getContext("2d");
                    new Chart(ctx, {
                        type: "bar",
                        data: {
                            labels: Object.keys(this.inscriptionsByManager),
                            datasets: [
                                {
                                    label: "Inscripciones por Encargado",
                                    data: Object.values(this.inscriptionsByManager),
                                    backgroundColor: "rgba(146, 0, 0, 0.6)",
                                    borderColor: "rgba(146, 0, 0, 1)",
                                    borderWidth: 1,
                                },
                            ],
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        },
                    });
                },
                changeQR() {
                    alert("Funcionalidad para cambiar QR");
                },
                exportToExcel() {
                    alert("Exportando datos a Excel...");
                },
                editSchedule() {
                    alert("Abriendo editor de cronograma...");
                },
                manageSpeakers() {
                    alert("Abriendo gestión de disertantes...");
                },
            },
        });
    },
};
// Exportar el módulo para que pueda ser usado en otras páginas
export { AdminModule };




// Modulo para la pagina de Postulacion
const PostulacionModule = {
    init() {
        new Vue({
            el: "#app",
            data() {
                return {
                    name: "",
                    email: "",
                    university: "",
                    proposalTitle: "",
                    proposalDescription: "",
                    cv: null,
                    universities: ["UAGRM", "UEB", "NUR", "Otra"],
                    currentPage: "speakers",
                };
            },
            methods: {
                handleCVUpload(event) {
                    this.cv = event.target.files[0];
                },
                submitProposal() {
                    console.log("Propuesta enviada:", this.$data);
                    alert(
                        "Propuesta enviada con éxito. Se te notificará el resultado el 15 de agosto de 2024."
                    );
                    Object.keys(this.$data).forEach((key) => {
                        if (typeof this.$data[key] !== "object") this.$data[key] = "";
                    });
                    this.cv = null;
                },
            },
        });
    },
};
// Exportar el módulo para que pueda ser usado en otras páginas
export { PostulacionModule };




// Modulo para la pagina de Registro
const CronogramaModule = {
    init() {
        new Vue({
            el: "#app",
            data() {
                return {
                    schedule: [
                        {
                            date: "19 de septiembre de 2024",
                            events: [
                                {
                                    id: 1,
                                    time: "09:00 - 10:00",
                                    title: "Inauguración",
                                    description: "Ceremonia de apertura del congreso",
                                },
                                {
                                    id: 2,
                                    time: "10:30 - 12:00",
                                    title: "Conferencia Magistral",
                                    description:
                                        "Tema: El futuro de la educación superior en Bolivia",
                                },
                                {
                                    id: 3,
                                    time: "14:00 - 16:00",
                                    title: "Sesiones Paralelas",
                                    description:
                                        "Presentaciones de investigaciones en diversas áreas",
                                },
                            ],
                        },
                        {
                            date: "20 de septiembre de 2024",
                            events: [
                                {
                                    id: 4,
                                    time: "09:00 - 11:00",
                                    title: "Talleres",
                                    description: "Talleres prácticos en diferentes disciplinas",
                                },
                                {
                                    id: 5,
                                    time: "11:30 - 13:00",
                                    title: "Panel de Discusión",
                                    description:
                                        "Tema: Desafíos y oportunidades para los jóvenes profesionales",
                                },
                                {
                                    id: 6,
                                    time: "15:00 - 17:00",
                                    title: "Networking",
                                    description:
                                        "Sesión de networking y presentación de proyectos estudiantiles",
                                },
                            ],
                        },
                        {
                            date: "21 de septiembre de 2024",
                            events: [
                                {
                                    id: 7,
                                    time: "09:00 - 11:00",
                                    title: "Conferencias Finales",
                                    description:
                                        "Presentaciones de los principales hallazgos del congreso",
                                },
                                {
                                    id: 8,
                                    time: "11:30 - 13:00",
                                    title: "Ceremonia de Clausura",
                                    description:
                                        "Entrega de reconocimientos y cierre del evento",
                                },
                            ],
                        },
                    ],
                    currentPage: "schedule",
                };
            },
        });
    },
};

// Exportar el módulo para que pueda ser usado en otras páginas
export { CronogramaModule };




// Modulo para la pagina de Disertantes
const DisertantesModule = {
    init() {
        new Vue({
            el: "#app",
            data() {
                return {
                    speakers: [
                        {
                            id: 1,
                            name: "Dra. María López",
                            university: "UAGRM",
                            topic: "Innovación en Educación Superior",
                            image: "https://randomuser.me/api/portraits/women/1.jpg",
                            bio: "La Dra. María López es una reconocida experta en innovación educativa...",
                        },
                        {
                            id: 2,
                            name: "Dr. Carlos Rodríguez",
                            university: "UEB",
                            topic: "Sostenibilidad y Desarrollo",
                            image: "https://randomuser.me/api/portraits/men/1.jpg",
                            bio: "El Dr. Carlos Rodríguez ha dedicado su carrera a investigar soluciones sostenibles...",
                        },
                        {
                            id: 3,
                            name: "Ing. Ana Martínez",
                            university: "NUR",
                            topic: "Tecnología y Sociedad",
                            image: "https://randomuser.me/api/portraits/women/2.jpg",
                            bio: "La Ing. Ana Martínez es pionera en el estudio del impacto social de las nuevas tecnologías...",
                        },
                    ],
                    selectedSpeaker: null,
                    currentPage: "confirmed-speakers",
                };
            },
            methods: {
                showBio(speaker) {
                    this.selectedSpeaker = speaker;
                },
            },
        });
    },
};
// Exportar el módulo para que pueda ser usado en otras páginas
export { DisertantesModule };