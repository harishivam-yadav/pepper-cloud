/**
 * Generates random data for testing purposes, including a last name, company name, and email.
 * This file can be imported and used in Playwright test files.
 */

/**
 * Generates a random string of lowercase letters.
 * @param {number} length - The desired length of the random string.
 * @returns {string} A random string.
 */
function generateRandomString(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Generates a random last name with 5 additional random lowercase characters concatenated.
 * Example: "dsouzabnvhd"
 * @returns {string} A randomly generated last name.
 */
function generateRandomLastName() {
  const baseLastNames = [
    "Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore",
    "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson",
    "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker",
    "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill",
    "Scott", "Green", "Adams", "Baker", "Nelson", "Carter", "Mitchell", "Perez",
    "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
    "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell",
    "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward",
    "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly",
    "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman",
    "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington",
    "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin",
    "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace",
    "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis",
    "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray",
    "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter",
    "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren",
    "Dixon", "Reyes", "Palmer", "Stone", "Meyer", "Schmidt", "Rose", "Dunn",
    "Perkins", "Spencer", "Hawkins", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall",
    "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens",
    "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason",
    "Morales", "Kennedy", "Warren", "Dixon", "Reyes", "Palmer", "Stone", "Meyer",
    "Schmidt", "Rose", "Dunn", "Perkins", "Spencer", "Hawkins", "Ferguson", "Nichols",
    "Grant", "Hansen", "Page", "Dean", "Scott", "Green", "Adams", "Baker",
    "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell",
    "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers",
    "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper",
    "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez",
    "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood",
    "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long",
    "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales",
    "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford",
    "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan",
    "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz",
    "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson",
    "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd",
    "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Reyes", "Palmer", "Stone",
    "Meyer", "Schmidt", "Rose", "Dunn", "Perkins", "Spencer", "Hawkins", "Ferguson",
    "Nichols", "Grant", "Hansen", "Page", "Dean", "Sharp", "Todd", "Blake",
    "Cannon", "Chambers", "Christensen", "Conner", "Curry", "Daniels", "Davidson", "Douglas",
    "Duncan", "Estrada", "Fleming", "Ford", "Fox", "Frank", "Gardner", "George",
    "Giles", "Gordon", "Graham", "Grant", "Greer", "Gross", "Harmon", "Harper",
    "Harris", "Hart", "Harvey", "Hayes", "Henderson", "Henry", "Herrera", "Hicks",
    "Hoffman", "Holland", "Holmes", "Hopkins", "House", "Houston", "Howell", "Hubbard",
    "Hudson", "Hunt", "Hunter", "Jackson", "Jacobs", "James", "Jenkins", "Jensen",
    "Jimenez", "Johnson", "Jones", "Jordan", "Kelly", "Kennedy", "Kim", "King",
    "Knight", "Lane", "Larson", "Lawrence", "Lee", "Lewis", "Long", "Lopez",
    "Love", "Lowery", "Lucas", "Lynch", "Marshall", "Martin", "Martinez", "Mason",
    "Mathews", "McDonald", "Medina", "Mendoza", "Meyer", "Miller", "Mills", "Mitchell",
    "Montgomery", "Moore", "Morales", "Morgan", "Morris", "Morrison", "Mullins", "Munoz",
    "Murphy", "Murray", "Myers", "Nash", "Neal", "Nelson", "Newman", "Nichols",
    "Obrien", "Olson", "Ortiz", "Owens", "Palmer", "Parker", "Patterson", "Payne",
    "Perez", "Perkins", "Perry", "Peters", "Peterson", "Phillips", "Pierce", "Porter",
    "Powell", "Price", "Ramirez", "Ramos", "Ray", "Reed", "Reyes", "Reynolds",
    "Rice", "Richardson", "Riley", "Rivera", "Roberts", "Robinson", "Rodriguez", "Rogers",
    "Romero", "Rose", "Ross", "Ruiz", "Russell", "Sanchez", "Sanders", "Schmidt",
    "Scott", "Shaw", "Sherman", "Silva", "Simmons", "Simpson", "Smith", "Snyder",
    "Spencer", "Stephens", "Stevens", "Stewart", "Stone", "Sullivan", "Taylor", "Thomas",
    "Thompson", "Torres", "Tucker", "Turner", "Vasquez", "Wagner", "Walker", "Wallace",
    "Ward", "Warren", "Washington", "Watson", "Webb", "Wells", "West", "Wheeler",
    "White", "Williams", "Williamson", "Wilson", "Wise", "Wood", "Woods", "Wright",
    "Wyatt", "Young", "Zuniga"
  ];
  const randomBaseLastName = baseLastNames[Math.floor(Math.random() * baseLastNames.length)];
  const randomSuffix = generateRandomString(5);
  return `${randomBaseLastName.toLowerCase()}${randomSuffix}`;
}

/**
 * Generates a random company name.
 * @returns {string} A randomly generated company name.
 */
function generateRandomCompanyName() {
  const prefixes = ["Global", "Dynamic", "Innovative", "Apex", "Synergy", "Prime", "Elite", "Future", "Bright", "Unified"];
  const suffixes = ["Solutions", "Tech", "Systems", "Group", "Innovations", "Ventures", "Corp", "Enterprises", "Labs", "Partners"];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${randomPrefix} ${randomSuffix}`;
}

/**
 * Generates a random email address with different domains and a 5-digit number concatenated.
 * Example: "user.name12345@example.com"
 * @returns {string} A randomly generated email address.
 */
function generateRandomEmail() {
  const emailPrefix = generateRandomString(8); // e.g., "abcdefgh"
  const randomNumber = Math.floor(10000 + Math.random() * 90000); // 5-digit number
  const domains = ["example.com", "test.org", "mail.net", "domain.co", "web.io"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${emailPrefix}${randomNumber}@${randomDomain}`;
}

/**
 * Generates all random data (last name, company name, and email) in a single call.
 * @returns {object} An object containing randomLastName, randomCompanyName, and randomEmail.
 */
function generateAllRandomData() {
  return {
    lastName: generateRandomLastName(),
    companyName: generateRandomCompanyName(),
    email: generateRandomEmail(),
  };
}

// Export the functions for use in other modules (e.g., Playwright test files)
module.exports = {
  generateRandomLastName,
  generateRandomCompanyName,
  generateRandomEmail,
  generateAllRandomData, // Export the new combined function
};
