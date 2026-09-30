import heroCoupleImg from '../assets/images/hero_couple_cartoon_1790749533453.jpg';
import ceremonyChurchImg from '../assets/images/ceremony_church_1790749550370.jpg';
import receptionStageImg from '../assets/images/reception_jabaraj_veronica_1790758563270.jpg';
import royalPalaceHallImg from '../assets/images/royal_palace_hall_1790782691387.jpg';

export interface EventDetail {
  id: string;
  titleEn: string;
  titleTa: string;
  subtitleEn: string;
  subtitleTa: string;
  timeEn: string;
  timeTa: string;
  venueNameEn: string;
  venueNameTa: string;
  addressEn: string;
  addressTa: string;
  image: string;
  mapsUrl: string;
  busInfoEn?: string;
  busInfoTa?: string;
  dropPointEn?: string;
  dropPointTa?: string;
}

export interface FamilyRelation {
  poeticTitleTa: string;
  relationTa: string;
  poeticTitleEn: string;
  relationEn: string;
  iconName: string;
}

export const WEDDING_DATA = {
  groom: {
    nameEn: "C. Jabaraj",
    nameTa: "C. ஜெபராஜ்",
    parentsEn: "Mr. (Late) Charles & Mrs. Latha",
    parentsTa: "(லேட்) திரு. சார்லஸ் & திருமதி. லதா",
    grandparentsEn: "(Late) Mr. Sarangan & (Late) Mrs. Kamatchi",
    grandparentsTa: "(லேட்) திரு. சாரங்கன் & (லேட்) திருமதி. காமாட்சி",
    residenceEn: "No. 54, Damodaran Nagar, 3rd Street, Vyasarpadi Mullai Nagar, Chennai - 39",
    residenceTa: "சென்னை - 39, எண்.54, தாமோதரன் நகர், 3-வது தெரு, வியாசர்பாடி முல்லை நகர்",
  },
  bride: {
    nameEn: "R. Tharani (a) Veronica",
    nameTa: "R. தாரணி (எ) விரோனிக்கா",
    parentsEn: "Mr. (Late) Raja & Mrs. Devi",
    parentsTa: "(லேட்) திரு. ராஜா & திருமதி. தேவி",
    grandparentsEn: "(Late) Mr. Rajaram & Mrs. Fatima",
    grandparentsTa: "(லேட்) திரு. ராஜாராம் & திருமதி. பாத்திமா",
    brotherEn: "Selvan Ashwin",
    brotherTa: "செல்வன். அஷ்வின்",
    residenceEn: "No. 7/13, V.P.N. Colony, 4th Street, Kannikapuram, Chennai - 12",
    residenceTa: "சென்னை - 12, எண்.7/13, வி.பி.என். காலனி, 4வது தெரு, கன்னிகாபுரம்",
  },
  dateISO: "2026-10-13T17:00:00+05:30",
  dateFormattedEn: "Tuesday, 13th October 2026",
  dateFormattedTa: "13-10-2026 செவ்வாய்க்கிழமை",
  verse: {
    refEn: "Genesis 24:50",
    refTa: "ஆதியாகமம் 24:50",
    quoteEn: "The things proceedeth from the LORD.",
    quoteTa: "இந்தக் காரியம் கர்த்தரால் வந்தது",
    praiseEn: "Praise the Lord",
    praiseTa: "கர்த்தருக்கு ஸ்தோத்திரம்",
  },
  monogram: "J & V",
  images: {
    hero: heroCoupleImg,
    ceremony: ceremonyChurchImg,
    reception: receptionStageImg,
    avatar: heroCoupleImg,
    palaceBg: royalPalaceHallImg,
  },
  contacts: [
    { nameEn: "Mrs. Latha (Groom's Mother)", nameTa: "திருமதி. லதா", phone: "8124416269", displayPhone: "+91 81244 16269" },
    { nameEn: "Mrs. Devi (Bride's Mother)", nameTa: "திருமதி. தேவி", phone: "7200227347", displayPhone: "+91 72002 27347" },
    { nameEn: "Ashwin (Bride's Brother)", nameTa: "செல்வன். அஷ்வின்", phone: "7305801527", displayPhone: "+91 73058 01527" },
  ],
  events: [
    {
      id: "ceremony",
      titleEn: "Holy Matrimony Service",
      titleTa: "பரிசுத்த விவாக ஆராதனை",
      subtitleEn: "Sacred Covenant & Blessings in the House of God",
      subtitleTa: "கர்த்தருடைய சந்நிதியில் பரிசுத்த திருமண உடன்படிக்கை",
      timeEn: "5:00 PM Onwards",
      timeTa: "மாலை 5.00 மணியளவில்",
      venueNameEn: "The Pentecostal Mission",
      venueNameTa: "த பெந்தெகொஸ்தே சபை",
      addressEn: "Sharma Nagar, E.H. Road, Chennai - 600039",
      addressTa: "E.H. ரோடு, சர்மா நகர், சென்னை - 600039",
      image: ceremonyChurchImg,
      mapsUrl: "https://maps.app.goo.gl/SpnxH2TFw3aAzFYw6",
    },
    {
      id: "reception",
      titleEn: "Wedding Reception & Dinner",
      titleTa: "வரவேற்பு நிகழ்ச்சி மற்றும் அன்பின் உபசரிப்பு",
      subtitleEn: "Celebration, Greetings, Feast & Fellowship",
      subtitleTa: "மங்கள வாழ்த்தும் சுவையான அன்பின் விருந்துபசரிப்பும்",
      timeEn: "7:00 PM Onwards",
      timeTa: "மாலை 7.00 மணிக்குமேல்",
      venueNameEn: "Annal Ambedkar Thirumana Maaligai",
      venueNameTa: "அண்ணல் அம்பேத்கர் திருமண மாளிகை",
      addressEn: "Chandrayogi Main Road, Mangalapuram, Perambur, Chennai - 600012",
      addressTa: "சந்திரயோகி மெயின் ரோடு, (ஜமாலியா) மங்களபுரம், பெரம்பூர், சென்னை - 600012",
      image: receptionStageImg,
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ambedkar+Thirumana+Maaligai+Chandrayogi+Main+Road+Mangalapuram+Perambur+Chennai",
      busInfoEn: "Bus Routes: 29A, 29B, 29C, 29E, 42, 38C",
      busInfoTa: "பஸ்ரூட்: 29A, 29B, 29C, 29E, 42, 38C",
      dropPointEn: "Bus Stop: Mangalapuram (Jamalia)",
      dropPointTa: "இறங்குமிடம்: மங்களபுரம் (ஜமாலியா)",
    },
  ],
  poeticTributes: [
    {
      poeticTitleTa: "சத்தியத்தை போதித்த",
      relationTa: "பரிசுத்தவான்கள்",
      poeticTitleEn: "Those who taught the eternal truth",
      relationEn: "Saints & Pastors",
      iconName: "BookOpen",
    },
    {
      poeticTitleTa: "வேராய் நிலைநிறுத்திய",
      relationTa: "பெற்றோர்",
      poeticTitleEn: "Those who anchored our lives as roots",
      relationEn: "Beloved Parents",
      iconName: "HeartHandshake",
    },
    {
      poeticTitleTa: "விதையாய் வழிகாட்டிய",
      relationTa: "ஆசான்கள்",
      poeticTitleEn: "Those who sowed wisdom like seeds",
      relationEn: "Respected Teachers",
      iconName: "GraduationCap",
    },
    {
      poeticTitleTa: "கிளையாய் அரவணைக்கும்",
      relationTa: "பெரியப்பாக்கள் பெரியம்மாக்கள்",
      poeticTitleEn: "Those who embrace like protective branches",
      relationEn: "Elders & Senior Aunts/Uncles",
      iconName: "Users",
    },
    {
      poeticTitleTa: "தென்றலாய் நல்வழிப்படுத்தும்",
      relationTa: "சித்தப்பாக்கள் சித்திகள்",
      poeticTitleEn: "Those who guide like a gentle southern breeze",
      relationEn: "Paternal Aunts & Uncles",
      iconName: "Wind",
    },
    {
      poeticTitleTa: "நீரோடையாய் அன்பொழுகும்",
      relationTa: "மாமாக்கள் மாமிகள்",
      poeticTitleEn: "Those who shower love like a pristine stream",
      relationEn: "Maternal Aunts & Uncles",
      iconName: "Waves",
    },
    {
      poeticTitleTa: "பாசச் சோலையாய் திகழும்",
      relationTa: "அண்ணன்கள் அண்ணிகள்",
      poeticTitleEn: "Those who bloom as a grove of deep affection",
      relationEn: "Elder Brothers & Sisters-in-law",
      iconName: "Flower2",
    },
    {
      poeticTitleTa: "மணம் வீசும்",
      relationTa: "அக்காக்கள் மாமன்கள்",
      poeticTitleEn: "Those who radiate fragrance & warmth",
      relationEn: "Elder Sisters & Brothers-in-law",
      iconName: "Sparkles",
    },
    {
      poeticTitleTa: "செடியின் மொட்டுகளாய் பூத்த",
      relationTa: "தம்பிகள் தங்கைகள்",
      poeticTitleEn: "Those blossomed as buds on the family branch",
      relationEn: "Younger Brothers & Sisters",
      iconName: "Sprout",
    },
    {
      poeticTitleTa: "சுவாசமாய் இணைந்த",
      relationTa: "நல்தோழமைகள்",
      poeticTitleEn: "Those bonded as close as our very breath",
      relationEn: "Dear Friends & Relatives",
      iconName: "Smile",
    },
    {
      poeticTitleTa: "இல்லம் மலரச் செய்த அன்பு",
      relationTa: "மழலைகள்",
      poeticTitleEn: "Those little angels who make home blossom with joy",
      relationEn: "Precious Little Children",
      iconName: "Heart",
    },
  ],
  sampleWishes: [],
};
