export class Employee {
    private _fullName!: string;

    get fullName() {
        return this._fullName;
    }
    set fullName(fullName: string) {
        this._fullName = fullName;
    }
}