const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'components', 'data', 'data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Update Header menu
const menu = data.common.Header.menu;
for (let i = 0; i < menu.length; i++) {
  if (menu[i].label === 'Contact Us') {
    menu[i].href = '/contact-us';
  }
}

// Add Contact section
if (!data.categories.Event.sections.Contact) {
  data.categories.Event.sections.Contact = {
    variants: {
      EventContact1: {
        title: "Contact Us",
        subtitle: "GET IN TOUCH",
        info: [
          {
            icon: "PhoneCall",
            title: "Phone",
            details: "+1 (555) 222 333 999"
          },
          {
            icon: "Mail",
            title: "Email Address",
            details: "hello@occasia.com"
          },
          {
            icon: "MapPin",
            title: "Our Address",
            details: "2118, New York, UK."
          }
        ],
        form: {
          title: "Send Us A Message",
          subtitle: "GET IN TOUCH",
          highlightText: "A Message",
          description: "We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible."
        },
        map: {
          image: "map-image.png",
          address: "123 Celebration Avenue, Mumbai, Maharashtra 400001"
        }
      }
    }
  };
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Successfully updated data.json');
