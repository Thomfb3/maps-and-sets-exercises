describe("#1. Set Quick Question", function () {
    const newSet = new Set([1, 1, 2, 2, 3, 4])

    it("should return set object", function () {
        expect([...newSet]).toEqual([1, 2, 3, 4]);
    });
});


describe("#2. Set Quick Question", function () {
    const ref = [...new Set("referee")].join("");

    it("should return string without duplicate characters", function () {
        expect(ref).toEqual("ref");
    });
});


describe("#3. Set Quick Question", function () {
    let m = new Map();
    const one = [1, 2, 3];
    const two = [1, 2, 3];
    m.set(one, true);
    m.set(two, false);

    it("should find entry based on key, key is declared array", function () {
        expect(m.get(one)).toEqual(true);
    });
    it("should find entry based on key, key is declared array", function () {
        expect(m.get(two)).toEqual(false);
    });

    let m2 = new Map();
    m2.set([1, 2, 3], true);
    m2.set([1, 2, 3], false);


    it("should find entry based on key, key is array", function () {
        expect([...m2.values()]).toEqual([true, false]);
    });
});


describe("#hasDuplicate", function () {
    const array1 = [1, 1, 2, 2, 3, 4];
    const array2 = [1, 2, 3, 4];

    it("should return true because array has duplicate", function () {
        expect(hasDuplicate(array1)).toEqual(true);
    });

    it("should return true because array has duplicate", function () {
        expect(hasDuplicate([undefined, 3, 2, -1, undefined])).toEqual(true);
    });

    it("should return true because array has duplicate", function () {
        expect(hasDuplicate([1, 3, 2, 1])).toEqual(true);
    });

    it("should return false because array does not have duplicates", function () {
        expect(hasDuplicate(array2)).toEqual(false);
    });

    it("should return false because array does not have duplicates", function () {
        expect(hasDuplicate([1, 5, -1, 4])).toEqual(false);
    });

    it("should return false because array does not have duplicates", function () {
        expect(hasDuplicate([undefined, 3, 2, 1])).toEqual(false);
    });
});


describe("#hasDuplicateSolution", function () {
    const array1 = [1, 1, 2, 2, 3, 4];
    const array2 = [1, 2, 3, 4];

    it("should return true because array has duplicate", function () {
        expect(hasDuplicateSolution(array1)).toEqual(true);
    });

    it("should return true because array has duplicate", function () {
        expect(hasDuplicateSolution([undefined, 3, 2, -1, undefined])).toEqual(true);
    });

    it("should return true because array has duplicate", function () {
        expect(hasDuplicateSolution([1, 3, 2, 1])).toEqual(true);
    });

    it("should return false because array does not have duplicates", function () {
        expect(hasDuplicateSolution(array2)).toEqual(false);
    });

    it("should return false because array does not have duplicates", function () {
        expect(hasDuplicateSolution([1, 5, -1, 4])).toEqual(false);
    });

    it("should return false because array does not have duplicates", function () {
        expect(hasDuplicateSolution([undefined, 3, 2, 1])).toEqual(false);
    });
});


describe("#vowelCount", function () {
    const testObj1 = {
        "a": 1,
        "e": 2,
        "o": 1
    }

    const testObj2 = {
        "i": 2,
        "a": 1,
        "e": 2,
        "o": 2
    }

    it("should return object with vowels contained in argument string", function () {
        expect(Object.fromEntries(vowelCount("Awesome"))).toEqual(testObj1);
    });

    it("should return object with vowels contained in argument string", function () {
        expect(Object.fromEntries(vowelCount("This is a test for vowels"))).toEqual(testObj2);
    });

});
