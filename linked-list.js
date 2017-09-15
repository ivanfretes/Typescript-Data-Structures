var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @class NodoItem<GenericData>
 * Estructura de un Nodo simple
 */
var NodeItem = (function () {
    function NodeItem(d) {
        this.data = d;
        this.sigte = null;
    }
    return NodeItem;
}());
/**
 * @class LinkedList
 *
 * Listado de NodeItem
 */
var LinkedList = (function () {
    function LinkedList() {
        this.size = 0;
        this.current_node = null;
    }
    /**
     * Retorna el tamaño de la lista
     *
     * @return {number}
     */
    LinkedList.prototype.get_size = function () {
        return this.size;
    };
    /**
     * Inserta un elemento el la lista, en la primera posición
     * @param data
     */
    LinkedList.prototype.insert_node = function (data) {
        var node = new NodeItem(data);
        node.sigte = this.current_node;
        this.current_node = node;
        this.size++;
    };
    /**
     * Elimina el elemento que se encuentra en la
     * posicion de la lista
     *
     * @param {number} index Posicion a ser eliminada
     *
     * @return {boolean}
     */
    LinkedList.prototype.delete_by_index = function (index) {
        var tmp_node = this.current_node;
        var aux_node;
        for (var i = 0; i < this.size; i++) {
            aux_node = tmp_node.sigte;
            if (i === index) {
                // = aux_node.sigte;
                break;
            }
            tmp_node = aux_node;
            continue;
        }
        console.log(tmp_node);
    };
    /**
     *
     * Lista todos los elementos con sus respectivos datos
     */
    LinkedList.prototype.get_list_nodes = function () {
        var tmp_node = this.current_node;
        var aux_node;
        while (null !== tmp_node.sigte) {
            aux_node = tmp_node.sigte;
            tmp_node = aux_node;
            console.log(tmp_node);
        }
    };
    /**
     * Elimina la/las coincidencias
     * dependiendo del estado de all_ocurrence,
     * retorna si elimino o no, alguna coincidencia
     *
     * @param {D} data
     * @param {boolean} all_ocurrence
     *
     * @return {boolean}
     */
    LinkedList.prototype.delete_by_ocurrence = function (data, all_ocurrence) {
        if (all_ocurrence === void 0) { all_ocurrence = false; }
        var tmp_node = this.current_node;
        var aux_node;
        while (null !== tmp_node.sigte) {
            aux_node = tmp_node.sigte;
            tmp_node = aux_node;
            if (data === tmp_node.data) {
                /**
                 * Hacer el proceso de eliminacion
                 */
                if (true === all_ocurrence) {
                    continue;
                }
                return true;
            }
        }
        // Acualizamos el nodo
        this.current_node = tmp_node;
        return false;
    };
    /**
     * Busca un elemento en la lista
     *
     * @return NodeItem
     */
    LinkedList.prototype.search_node = function () {
    };
    return LinkedList;
}());
/**
 * Lista doble enlazada
 */
var LinkedListDouble = (function (_super) {
    __extends(LinkedListDouble, _super);
    function LinkedListDouble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LinkedListDouble;
}(LinkedList));
var LinkedListCircular = (function (_super) {
    __extends(LinkedListCircular, _super);
    function LinkedListCircular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LinkedListCircular;
}(LinkedList));
var LinkedListDoubleCircular = (function (_super) {
    __extends(LinkedListDoubleCircular, _super);
    function LinkedListDoubleCircular() {
        return _super.call(this) || this;
    }
    return LinkedListDoubleCircular;
}(LinkedListDouble));
/**
 * Test de la Lista
 */
function test_linked_list() {
    console.log('Init the LinkedList');
    var l = new LinkedList();
    // load elements
    l.insert_node(5);
    l.insert_node(6);
    l.insert_node(7);
    l.insert_node(9);
    l.insert_node(10);
    // list the element
    l.get_list_nodes();
    // delete the element
    l.delete_by_index(1);
    console.log('Salimos de la lista');
    // Insertamos un nuevo elemento
}
test_linked_list();
