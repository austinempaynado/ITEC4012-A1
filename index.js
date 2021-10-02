//Constants
const express = require('express');
const app = express();
const port = 9000;

//
app.get('/', (req, res)=>{
    res.send("The server is working as expected.");
});

app.listen(port, ()=>{
    console.log('listening on port:', port);
});

app.get('/api/penguins', (req, res) =>{
    const penguinFacts = [
    "1. A group of penguins in the water is called a raft but on land they’re called a waddle!",
    "2. The black and white tuxedo look donned by most penguin species is a clever camouflage called countershading.",
    "3. Penguins evolved to fly underwater.", 
    "4. Penguins spend several hours each day covering their feathers with oil and give extra attention to the task before swimming.",
    "5. You can find them in Antarctica and Antarctic islands, the Galapagos Islands off the coast of Ecuador, South Africa, New Zealand, Australia, Peru and Chile.", 
    "6. Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild.",
    "7. Penguin feet are adapted to walk long distances.",
    "8. Many male penguins gift female penguins with rocks in order to woo them.",
    "9. According to some animal experts, the penguin is one of the most streamlined animals in the world.",
    "10. Penguins may huddle together for several reasons. (Protecting each other from predators or the cold)",
    "Facts sourced from: https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"];
    res.send(penguinFacts);
});