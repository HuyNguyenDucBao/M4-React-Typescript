class DateFormatter {
    constructor(date) {
        this.date = date;
    }

    formatDate = () => {
        let day = this.date.getDate().toString().padStart(2, '0');
        let month = (this.date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero indexed
        let year = this.date.getFullYear();
        return `${day}/${month}/${year}`;
    }    
}

export { DateFormatter };
