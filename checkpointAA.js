// Decision Making (if-else and switch)

// Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Ticket Pricing
function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Weather Clothing Adviser
function clothingAdviser(temperature, isRaining) {
    if (temperature < 50) {
        return "You should wear a heavy coat and bring an umbrella.";
    } else if (temperature >= 50 && temperature < 70) {
        if (isRaining) {
            return "You should wear a jacket and bring an umbrella.";
        } else {
            return "You should wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "You should bring an umbrella.";
        } else {
            return "You don't need any extra clothing.";
        }
    }
}

// Recursion

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Palindrome Checker
function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        // Recursively check remaining substring
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

// Power Function
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Testing the functions
console.log(isLeapYear(2024)); // true
console.log(ticketPrice(16)); // 15
console.log(clothingAdviser(60, true)); // "You should wear a jacket and bring an umbrella."
console.log(fibonacci(6)); // 8
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(power(2, 5)); // 32
