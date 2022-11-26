import { Observable } from "rxjs";
import { Todo } from "../model/todo.model";

export default interface iTodoService {
    getAll(): Observable<Todo[]>;
    save(todo:Todo): Observable<void>;
    toggle(todo: Todo): Observable<void>;
    getTodo(id: number): Observable<Todo>;
    delete(todo: Todo): Observable<void>;
}