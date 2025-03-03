import Spacer from './components/Spacer';
import Footer from './components/Footer';
import TitleWithInfo from './sections/TitleWithInfo';
import LocationsGallery from './sections/LocationsGallery';
import LocationsContactInfo from './sections/LocationsContactInfo';
import Hero from './sections/Hero';

export default function Home() {
    return (
        <main>
            <div className="h-screen flex flex-col">
                <Spacer />

                <Hero />

                <Spacer />
            </div>

            <Spacer size="md" />

            <TitleWithInfo
                title="About us"
                decoration="საკვები"
                subtitle="Georgian cuisine in the atmospheric environments
                        of our restaurants in Espoo, Turku, Helsinki and
                        Tampere."
                textLeft="Our Georgian restaurant Rioni offers a taste of the
                        traditional Georgian cuisine. We serve hearty meals for
                        lovers of succulent meat stews and vegetarian lovers
                        alike. We also offer vegan food."
                textRight="The house wine list features a wide selection of
                        Georgian wines imported by us, which add the finishing
                        touch to the whole experience."
                buttonText="Find out more about us"
            />

            <Spacer />

            <LocationsGallery />

            <Spacer />

            <TitleWithInfo
                title="Menu"
                decoration="მენიუ"
                subtitle="Unique, rich and succulent – ​​Georgian cuisine is a
                        feast for all the senses. Our food is characterized by
                        the harmonious coexistence of meat and vegetables."
                textLeft="Although our Georgian cuisine offers meat skewers, meat
                        stews and meatballs, vegetarians and vegans will also
                        find many good reasons to sit down at the table. In
                        Georgian cuisine, vegetables such as eggplant, beetroot,
                        cabbage, beans and tomatoes are especially prominent on
                        the plate."
                textRight="Spices are used extensively in Georgian cuisine.
                        Coriander and the lesser-known spice fenugreek create a
                        distinctive flavor. Our cuisine is mildly spiced but not
                        too spicy."
                buttonText="Open our menu"
            />

            <Spacer />

            <LocationsContactInfo />

            <Spacer />

            <Footer />
        </main>
    );
}
