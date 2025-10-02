function changePicture(value) {
    var image = document.getElementById("changing_landmark");
    var description = document.getElementById("description");
    var map = document.getElementById("map");
    if (value === 'The Roman Colosseum') {
        image.src = "./Pictures/Colosseum-Rome-Italy.png";
        map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1228885023656!2d12.489655976808855!3d41.89021416465465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sus!4v1759363233526!5m2!1sen!2sus";
        description.textContent = "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age. Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir, Titus. Further modifications were made during the reign of Domitian (81–96). The three emperors who were responsible for building the Colosseum are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name (Flavius)."
    }
    else if (value === 'The Great Sphinx of Giza') {
        image.src = "./Pictures/Great-Sphinx-dynasty-Giza.png";
        map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.144626990173!2d31.13499247646007!3d29.975273321843225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f62a3aea979%3A0xc9d3f0a64066bda9!2sGreat%20Sphinx%20of%20Giza!5e0!3m2!1sen!2sus!4v1759363464883!5m2!1sen!2sus";
        description.textContent = "The Great Sphinx of Giza is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human. It stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt. The face of the Sphinx is generally believed to represent the Pharaoh Khafre. The Great Sphinx is one of the largest and oldest statues in the world, measuring 73 meters (240 feet) long from paw to tail, 20 meters (66 feet) high from the base to the top of the head, and 19 meters (62 feet) wide at its rear haunches. It is believed to have been built during the reign of Khafre (c. 2558–2532 BC) during the Old Kingdom."
    }
    else if (value === 'Moai') {
        image.src = "./Pictures/p0lmr1gk.jpg";
        map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56823.249019858515!2d-109.38146308108762!3d-27.110536289749863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9947f1b353dbf5b3%3A0x7d0c6060d9c62ef6!2sMoai!5e0!3m2!1sen!2sus!4v1759363377596!5m2!1sen!2sus";
        description.textContent = "Moai are monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia between 1250 and 1500 CE. The moai are primarily carved from volcanic tuff (compressed volcanic ash) found at the Rano Raraku quarry, with some carved from basalt, trachyte, and red scoria. The moai are characterized by their oversized heads, which are about 3/8 the size of the whole statue. They typically have heavy brows, elongated noses, and prominent chins. Many of the moai also feature pukao, which are topknots or hats made from red scoria that were placed on top of the statues' heads."
    }
}

function changeSize() {
    var size = document.getElementById("size").value;
    var image = document.getElementById("changing_landmark");
    if (size === 'large') {
        image.style.width = "900px";
    }
    else if (size === 'medium') {
        image.style.width = "600px";
    }
    else if (size === 'small') {
        image.style.width = "300px";
    }
}