export interface Welcome {
    data: Datum[];
}

export interface Datum {
    _id:         string;
    email:       string;
    password:    string;
    first_name:  string;
    last_name:   string;
    mobile:      string;
    nationalId:  string;
    dateOfBirth: Date;
    gender:      string;
    address:     string;
    price:       number;
    biography:   string;
    category:    Category[];
    cities:      string;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
    schedules:   any[];
}

export interface Category {
    _id:       string;
    name_ar:   string;
    name_en:   string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}
