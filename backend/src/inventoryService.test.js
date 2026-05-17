const { crearProducto, listarProductos } = require('./inventoryService');

beforeEach(() => {
  jest.resetModules();
  // Limpiamos el arreglo vaciándolo manualmente para que los tests no se afecten entre sí
  const { crearProducto } = require('./inventoryService');
});

test('crea un producto válido con stock inicial 0 si no se define', () => {
  const prod = crearProducto({
    sku: 'A-001',
    nombre: 'Cable HDMI'
  });

  expect(prod.id).toBe(1);
  expect(prod.sku).toBe('A-001');
  expect(prod.nombre).toBe('Cable HDMI');
  expect(prod.stock).toBe(0);
});

test('lanza error si falta sku o nombre', () => {
  expect(() => crearProducto({ sku: 'A-002' })).toThrow('SKU y nombre son obligatorios');
  expect(() => crearProducto({ nombre: 'Mouse' })).toThrow('SKU y nombre son obligatorios');
});