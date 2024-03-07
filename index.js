// Welcome to EcoGarden!
// EcoGarden is a sustainable gardening platform designed to help you cultivate and maintain your own eco-friendly garden space.
// Whether you're an experienced gardener or a beginner looking to develop your green thumb,
// EcoGarden provides the tools, resources, and community support you need to grow healthy, organic produce and create a thriving garden ecosystem.
// Say goodbye to chemical pesticides and synthetic fertilizers, and hello to sustainable gardening with EcoGarden!

// Sample code to demonstrate basic functionality of EcoGarden

// Define a Plant class to represent plants in EcoGarden
class Plant {
    constructor(name, type, waterRequirement, sunExposure) {
        this.name = name;
        this.type = type;
        this.waterRequirement = waterRequirement;
        this.sunExposure = sunExposure;
    }

    getCareTips() {
        // Your code to get care tips for plants goes here
    }

    getCompanionPlants() {
        // Your code to get companion plants for a specific plant goes here
    }
}

// Define a Garden class to represent gardens in EcoGarden
class Garden {
    constructor(name, location, size) {
        this.name = name;
        this.location = location;
        this.size = size;
        this.plants = [];
    }

    addPlant(plant) {
        this.plants.push(plant);
    }

    displayPlants() {
        this.plants.forEach(plant => {
            console.log(`Name: ${plant.name}, Type: ${plant.type}`);
        });
    }
}

// Example usage of EcoGarden functionality
const garden = new Garden('My EcoGarden', 'Backyard', 'Medium');
const tomatoPlant = new Plant('Tomato', 'Fruit', 'Regular', 'Full Sun');
const basilPlant = new Plant('Basil', 'Herb', 'Regular', 'Partial Sun');
garden.addPlant(tomatoPlant);
garden.addPlant(basilPlant);

// Display plants in the garden
console.log('Plants in EcoGarden:');
garden.displayPlants();
