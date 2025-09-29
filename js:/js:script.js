// Datos de productos de ejemplo
const productos = [
    {
        id: 1,
        nombre: "Filtro de Aceite",
        categoria: "motor",
        descripcion: "Filtro de aceite de alta calidad para motores Volkswagen",
        precio: "$450",
        imagen: "motor"
    },
    {
        id: 2,
        nombre: "Pastillas de Freno",
        categoria: "frenos",
        descripcion: "Pastillas de freno delanteras para modelos Golf y Jetta",
        precio: "$1,200",
        imagen: "frenos"
    },
    {
        id: 3,
        nombre: "Amortiguadores",
        categoria: "suspension",
        descripcion: "Amortiguadores delanteros para mejor estabilidad",
        precio: "$2,500",
        imagen: "suspension"
    },
    {
        id: 4,
        nombre: "Alternador",
        categoria: "electrico",
        descripcion: "Alternador original para sistema eléctrico Volkswagen",
        precio: "$3,800",
        imagen: "electrico"
    },
    {
        id: 5,
        nombre: "Parachoques Delantero",
        categoria: "carroceria",
        descripcion: "Parachoques delantero compatible con modelos Jetta",
        precio: "$4,200",
        imagen: "carroceria"
    },
    {
        id: 6,
        nombre: "Bujías",
        categoria: "motor",
        descripcion: "Juego de bujías de platino para mejor combustión",
        precio: "$680",
        imagen: "motor"
    },
    {
        id: 7,
        nombre: "Discos de Freno",
        categoria: "frenos",
        descripcion: "Discos de freno ventilados para mayor durabilidad",
        precio: "$1,800",
        imagen: "frenos"
    },
    {
        id: 8,
        nombre: "Batería",
        categoria: "electrico",
        descripcion: "Batería de 12V 60Ah para Volkswagen",
        precio: "$2,300",
        imagen: "electrico"
    }
];

// Función para cargar productos en el catálogo
function cargarProductos(categoria = 'todos') {
    const productosGrid = document.querySelector('.productos-grid');
    productosGrid.innerHTML = '';
    
    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);
    
    productosFiltrados.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.dataset.categoria = producto.categoria;
        
        productoCard.innerHTML = `
            <div class="producto-img" style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}">
                ${producto.imagen.toUpperCase()}
            </div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <div class="producto-precio">${producto.precio}</div>
                <button class="btn" onclick="solicitarProducto('${producto.nombre}')">Solicitar</button>
            </div>
        `;
        
        productosGrid.appendChild(productoCard);
    });
}

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Cargar productos filtrados
    cargarProductos(categoria);
}

// Función para solicitar un producto específico
function solicitarProducto(nombreProducto) {
    document.getElementById('piezas').value = `Me interesa el producto: ${nombreProducto}. Por favor envíenme más información y disponibilidad.`;
    document.getElementById('cotizar').scrollIntoView({ behavior: 'smooth' });
}

// Manejo del formulario de cotización
document.getElementById('form-cotizacion').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí normalmente enviaríamos los datos a un servidor
    const formData = new FormData(this);
    const datos = {};
    
    for (let [key, value] of formData.entries()) {
        datos[key] = value;
    }
    
    // Simulación de envío exitoso
    alert('¡Gracias por tu cotización! Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar todos los productos inicialmente
    cargarProductos();
    
    // Configurar filtros
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filtrarProductos(this.dataset.categoria);
        });
    });
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});