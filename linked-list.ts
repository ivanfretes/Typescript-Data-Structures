

/**
 * @class NodoItem<GenericData>
 * Estructura de un Nodo simple
 */
class NodeItem<D> {

    public data: D;
    public sigte : NodeItem<D>;  

    constructor(d : D){
        this.data = d;
        this.sigte = null;    
    }
}

/*interface IPila {
    public pop();
    public push();
    public shift();
}*/

interface ILinkedList{
    delete_by_index();
    delete_by_coincidence();
    get_list_node();
    insert_node();
}


/**
 * @class LinkedList
 * 
 * Listado de NodeItem
 */
class LinkedList<D> {

    protected current_node : NodeItem<D>;
    protected size: number = 0;

    /**
     * Retorna el tamaño de la lista
     * 
     * @return {number}
     */
    public get_size(): number{
        return this.size;
    }

    /**
     * Inserta un elemento el la lista, en la primera posición
     * @param data 
     */
    public insert_node(data: D): void {
        let node  = new NodeItem<D>(data);
        node.sigte = this.current_node;
        this.current_node = node;

        this.size++; 
    }


    /**
     * Elimina el elemento que se encuentra en la
     * posicion de la lista
     * 
     * @param {number} index Posicion a ser eliminada
     * 
     * @return {boolean}
     */
    public delete_by_index(index : number): any {
        let tmp_node = this.current_node;
        let aux_node;

        for(let i : number = 0; i < this.size; i++){
            
            aux_node = tmp_node.sigte;

            if (i === index){
               // = aux_node.sigte;

                break;
            }
            
            
            tmp_node = aux_node; 

            continue;
        }

            
        console.log(tmp_node);
       
    } 

    /**
     * 
     * Lista todos los elementos con sus respectivos datos
     */
    public get_list_nodes(): void {
        let tmp_node = this.current_node;
        let aux_node;
        

        while(null !== (aux_node = tmp_node.sigte)){
            tmp_node = aux_node; 
            console.log(tmp_node);
        }
    }

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
    public delete_by_ocurrence(data: D, all_ocurrence : boolean = false): boolean{
        
        let tmp_node = this.current_node;
        let aux_node;
        

        while(null !== tmp_node.sigte){
            aux_node = tmp_node.sigte;
            tmp_node = aux_node; 
            
            if (data === tmp_node.data){

                /**
                 * Hacer el proceso de eliminacion
                 */

                if (true === all_ocurrence){
                    continue;
                }
                return true;
            }

        }

        // Acualizamos el nodo
        this.current_node = tmp_node;

        return false;
    }

    constructor(){
        this.current_node = null;
    }

    /**
     * Busca un elemento en la lista
     * 
     * @return NodeItem 
     */
    public search_node(): any {

    }




}

/**
 * Lista doble enlazada
 */
class LinkedListDouble<D> extends LinkedList<D>{
    // ...
}

class LinkedListCircular<D> extends LinkedList<D>{
    // ..
}

class LinkedListDoubleCircular<D> extends LinkedListDouble<D>{
    constructor(){
        super();
    }
}

/**
 * Test de la Lista
 */
function test_linked_list(): void {

    console.log('Init the LinkedList');

    let l = new LinkedList<number>();

    // load elements
    l.insert_node(5);
    l.insert_node(6);
    l.insert_node(7);
    l.insert_node(9);

    //l.insert_node(10);
    
    
    // list the element
    l.get_list_nodes();


    // delete the element
    l.delete_by_index(1);

    
    console.log('Salimos de la lista');
    // Insertamos un nuevo elemento
    
}

test_linked_list();


