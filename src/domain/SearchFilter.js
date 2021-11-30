export class SearchFilter {
    constructor() {
        this.text = null;
        this.city = null;
        this.salary = null;
        this.specialization = null;
        this.count = 20;
    }
    static byText(text) {
        let filter = new SearchFilter();
        filter.text = text;
        return filter;            
    }
    static byCity(city) {
        let filter = new SearchFilter();
        filter.city = city;
        return filter;            
    }
    static bySpecialization(specialization) {
        let filter = new SearchFilter();
        filter.specialization = specialization;
        return filter;            
    }
}