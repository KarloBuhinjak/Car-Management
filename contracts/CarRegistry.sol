// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract CarRegistry {
    struct Car {
        string vin;
        string name;
        string brand;
        string motor;
        uint256 mileage;
        string owner;
        uint256 yop;
        string reviewedBy;
        uint256 createdAt;
    }

    Car[] public allCars;

    function getAllCarsByVin(string memory vin) public view returns (Car[] memory) {
        return filterCarsByVin(vin);
    }

    function getAllCarsByReviewedBy(string memory reviewedBy) public view returns (Car[] memory) {
        return filterCarsByReviewedBy(reviewedBy);
    }

    function getAllCars() public view returns (Car[] memory) {
        return allCars;
    }

    function addCar(string memory vin, string memory name, string memory brand, string memory motor, uint256 mileage, string memory owner, uint256 yop, string memory reviewedBy) public {
        Car memory newCar = Car(vin, name, brand, motor, mileage, owner, yop, reviewedBy, block.timestamp);
        allCars.push(newCar);
    }

    function filterCarsByVin(string memory vin) private view returns (Car[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < allCars.length; i++) {
            if (compareStrings(allCars[i].vin, vin)) {
                count++;
            }
        }

        Car[] memory filteredCars = new Car[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < allCars.length; i++) {
            if (compareStrings(allCars[i].vin, vin)) {
                filteredCars[index] = allCars[i];
                index++;
            }
        }

        return filteredCars;
    }

    function filterCarsByReviewedBy(string memory reviewedBy) private view returns (Car[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < allCars.length; i++) {
            if (compareStrings(allCars[i].reviewedBy, reviewedBy)) {
                count++;
            }
        }

        Car[] memory filteredCars = new Car[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < allCars.length; i++) {
            if (compareStrings(allCars[i].reviewedBy, reviewedBy)) {
                filteredCars[index] = allCars[i];
                index++;
            }
        }

        return filteredCars;
    }

    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(bytes(a)) == keccak256(bytes(b)));
    }
}
