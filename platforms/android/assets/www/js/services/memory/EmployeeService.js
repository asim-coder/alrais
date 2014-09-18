var EmployeeService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var employees = [
        {"id": 1, "firstName": "Mahesh", "lastName": "Meshy", "managerId": 0, "managerName": "Sanoop T", "title": "Technical Head", "department": "IT", "cellPhone": "9447706978", "officePhone": "+914956999912", "email": "meshy@dayscholars.com", "city": "Calicut, Kerala", "pic": "Mahesh_Meshy.jpg", "twitterId": "@alraismeshy", "blog": "http://www.alraislabs.com"},
        {"id": 2, "firstName": "Sanoop", "lastName": "T", "managerId": 1, "managerName": "", "title": "Business Head", "department": "Management", "cellPhone": "9633100800", "officePhone": "+914956999912", "email": "sanoop@alraislabs.com", "city": "Calicut, Kerala", "pic": "Sanoop_T.jpg", "twitterId": "@alraissanoop", "blog": "http://www.alraislabs.com"},
        {"id": 3, "firstName": "Manu", "lastName": "T V", "managerId": 1, "managerName": "Sanoop T", "title": "Technical Head", "department": "IT", "cellPhone": "9995110874", "officePhone": "+914956999912", "email": "tvm@dayscholars.com", "city": "Calicut, Kerala", "pic": "Manu_TV.jpg", "twitterId": "@alraismanu", "blog": "http://www.alraislabs.com"},
        {"id": 4, "firstName": "Murukan", "lastName": "", "managerId": 1, "managerName": "Sanoop T", "title": "Manager", "department": "Management", "cellPhone": "9605551122", "officePhone": "+914956999912", "email": "murukan@alraislabs.com", "city": "Calicut, Kerala", "pic": "Murukan.jpg", "twitterId": "@alraismurukan", "blog": "http://www.alraislabs.com"},
        {"id": 5, "firstName": "Nabeel", "lastName": "", "managerId": 1, "managerName": "Sanoop T", "title": "Software Architect", "department": "IT", "cellPhone": "617-000-0005", "officePhone": "+914956999912", "email": "rmoore@alraislabs.com", "city": "Calicut, Kerala", "pic": "Ray_Moore.jpg", "twitterId": "@alraisnabeel", "blog": "http://www.alraislabs.com"},
        {"id": 6, "firstName": "Anu", "lastName": "Krishnan", "managerId": 4, "managerName": "Sanoop T", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "+914956999912", "email": "anu@alraislabs.com", "city": "Calicut, Kerala", "pic": "Paul_Jones.jpg", "twitterId": "@alraispjones", "blog": "http://www.alraislabs.com"},
        {"id": 7, "firstName": "Neethu", "lastName": "Ravindran", "managerId": 4, "managerName": "Murukan", "title": "Sr. Php Developer", "department": "IT", "cellPhone": "9497334157", "officePhone": "+914956999912", "email": "neethu@alraislabs.com", "city": "Calicut, Kerala", "pic": "Neethu_Ravindran.jpg", "twitterId": "@alraisneethu", "blog": "http://www.alraislabs.com"},
        {"id": 8, "firstName": "Simya", "lastName": "Ashok", "managerId": 2, "managerName": "Murukan", "title": "Sr. Php Developer", "department": "IT", "cellPhone": "7736349050", "officePhone": "+914956999912", "email": "simya@alraislabs.com", "city": "Calicut, Kerala", "pic": "Simya_Ashok.jpg", "twitterId": "@alraissimya", "blog": "http://www.alraislabs.com"},
        {"id": 9, "firstName": "Anand", "lastName": "Varghese", "managerId": 2, "managerName": "Murukan", "title": "System Admin + Jr. Php Developer", "department": "IT", "cellPhone": "9746148321", "officePhone": "+914956999912", "email": "anand@alraislabs.com", "city": "Calicut, Kerala", "pic": "Anand_Varghese.jpg", "twitterId": "@alraisanand", "blog": "http://www.alraislabs.com"},
        {"id": 10, "firstName": "Asim", "lastName": "K T", "managerId": 5, "managerName": "Murukan", "title": "Jr. Android Developer", "department": "IT", "cellPhone": "9048812190", "officePhone": "+914956999912", "email": "asim@alraislabs.com", "city": "Calicut, Kerala", "pic": "Asim_KT.jpg", "twitterId": "@asimkt", "blog": "http://www.alraislabs.com"},
        {"id": 11, "firstName": "Abhilash", "lastName": "K K", "managerId": 5, "managerName": "Murukan", "title": "Jr. Android Developer", "department": "IT", "cellPhone": "9048292903", "officePhone": "+914956999912", "email": "abhilash@alraislabs.com", "city": "Calicut, Kerala", "pic": "Abhilash_KK.jpg", "twitterId": "@alraisabhi", "blog": "http://www.alraislabs.com"},
        {"id": 12, "firstName": "Iqbal", "lastName": "M", "managerId": 4, "managerName": "Murukan", "title": "Jr. Php Developer", "department": "IT", "cellPhone": "9895131950", "officePhone": "+914956999912", "email": "iqbal@alraislabs.com", "city": "Calicut, Kerala", "pic": "Iqbal_M.jpg", "twitterId": "@alraisiqbal", "blog": "http://www.alraislabs.com"}
    ];

}
