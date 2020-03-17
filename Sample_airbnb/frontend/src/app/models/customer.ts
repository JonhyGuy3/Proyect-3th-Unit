export class Customer {
        constructor(_id='',Address = '', City = '',Country = '', District = '', FirstName= '',LastName = '',Status = ''){
            this._id = _id;
            this.Address = Address;
            this.City = City;
            this.Country = Country;
            this.District = District;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Status = Status;
        }
        
            _id: string;
            Address: string;
            City: string;
            Country:string;
            District:string;
            FirstName:string;
            LastName:string;
            Status:string;
}
