import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Chatbot.css";
import Post from "./Post";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#0f4d4a",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#0f4d4a",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// all available config props
const config = {
  width: "300px",
  height: "400px",
  hideUserAvatar: true,
  placeholder: "Type your response.",
  headerTitle: "ChatBot",
};

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <div className="bot">
      <ThemeProvider theme={theme}>
        <div style={{ display: showChat ? "" : "none" }}>
          <ChatBot
            speechSynthesis={{ enable: true, lang: "en-US" }}
            recognitionEnable={true}
            steps={[
              {
                id: "welcome",
                message: "Hello!",
                trigger: "q-firstname",
              },
              {
                id: "q-firstname",
                message: "What is your name?",
                trigger: "firstname",
              },
              {
                id: "firstname",
                user: true,
                validator: (value) => {
                  if (/^[A-Za-z]+$/.test(value)) {
                    return true;
                  } else {
                    return "Please input alphabet characters only.";
                  }
                },
                trigger: "travelbot",
              },
              {
                id: "travelbot",
                message:
                  "Hi, {previousValue}, Which place do you wish to travel?",
                trigger: "qtype",
              },
              {
                id: "qtype",
                options: [
                  { value: 1, label: "Maharashtra", trigger: "9" },
                  { value: 2, label: "Gujarat", trigger: "10" },
                  { value: 3, label: "Rajasthan", trigger: "11" },
                  { value: 4, label: "Kerala", trigger: "12" },
                  { value: 5, label: "Tamilnadu", trigger: "13" },
                ],
              },
              {
                id: "3",
                message:
                  "Places you can visit Gateway of India, Elephanta Caves, Marine Drive, Sanjay Gandhi National Park, Haji Ali Dargah ",
                trigger: "qtype",
              },
              {
                id: "4",
                message:
                  "Places you can visit Shreemant Dagdusheth, Halwai Ganpati Mandir, Khadakwasla Dam, Shaniwar wada, Aga Khan Palace, Sinhagad Fort",
                trigger: "qtype",
              },
              {
                id: "5",
                message:
                  "Places you can visit Pandav Leni Caves, Gangapur Dam, Muktidham Mandir, Sita Gufa, Ramshej Fort, Sundarnaryan Temple",
                trigger: "qtype",
              },
              {
                id: "6",
                message:
                  "Places you can visit Daulatabad Fort, Aurangabad Caves, Bibi Ka Maqbara, Chhatrapati Shivaji Museum, Chand Minar, Soneri Mahak",
                trigger: "qtype",
              },
              {
                id: "7",
                message:
                  "Places you can visit Takhat Sachkhand Sri Hazur Abchal nagar Sahib, Kaleshwar Mandir, Shri Guru Gobind Singh Ji Museum ",
                trigger: "qtype",
              },
              {
                id: "10.1",
                message:
                  "Sakkarbaug Zoological Park, Junagadh Museum,Uparkot Fort, Mahabat Maqbara Palace,Damodar Kund ",
                trigger: "qtype",
              },
              {
                id: "10.2",
                message:
                  "Sabarmati Ashram,The Adalaj Stepwell,Kankaria Lake,Jama Masjid,Sabarmati Riverfront,Law Garden ",
                trigger: "qtype",
              },
              {
                id: "10.3",
                message:
                  "Laxmi Vilas Palace,Baroda Museum And Picture Gallery,EME Temple,Kirti Mandir,Maharaja Fateh Singh Museum ",
                trigger: "qtype",
              },
              {
                id: "10.4",
                message:
                  "Mandvi Beach,Aaina Mahal Palace, Prag Mahal Palace,Shree Swaminarayan Temple Bhuj,White Desert Of Kutch,Vijaya Vilas Palace ",
                trigger: "qtype",
              },
              {
                id: "10.5",
                message:
                  "Shree Dwarkadhish Temple,Dwarka Beach,Sudama Setu, Bhadkeshwar Mahadev Temple, Swaminarayan Mandir, Samudra Narayan Temple",
                trigger: "qtype",
              },
              {
                id: "11.1",
                message:
                  "Hawa Mahal, Amber Palace, City pPalace, Jal Mahal, Rambagh Palace, Albert Hall Museum, Nahargarh Fort, Jaigarh Fort ",
                trigger: "qtype",
              },
              {
                id: "11.2",
                message:
                  "Mehrangarh Fort Museum, Jaswant Thada, Rao Jodha Desert Rock, Kalyana Lake, Mandore Garden, Toorji Ka Jhalra Bavdi, Ghanta Ghar",
                trigger: "qtype",
              },
              {
                id: "11.3",
                message:
                  "Jailsalmer Fort, Kothari Patwa Haveli, Gadisar Lake,The Thar Heritage Museum,Bada Bagh Mandir, Thar Camel Safari",
                trigger: "qtype",
              },
              {
                id: "11.4",
                message:
                  "City Palace, Lake Pichola, Jagmandir, Fateh Sagar Lake, Sajjangarh Monsoon Palace, Jagdish Temple, Shilpgram ",
                trigger: "qtype",
              },
              {
                id: "11.5",
                message:
                  "Junagarh Fort, Lalgar Palace, ICAR National Research Centre On Camel,Shri Laxminath Temple",
                trigger: "qtype",
              },
              {
                id: "12.1",
                message:
                  "Cherai Beach, Hill Palace Museum, Paradesi Synagogue, Mattancherry Palace,Willingdon Island ",
                trigger: "qtype",
              },
              {
                id: "12.2",
                message:
                  "Eravikulam National Park, Attukad Waterfall, Anamudi, Pothamedu View Point, Kollukumalai Tea Estate",
                trigger: "qtype",
              },
              {
                id: "12.3",
                message:
                  "Marari Beach, Alappuzha Beach, Alleppey Lighthouse, Sree krishna Swamy Temple, Krishnapuram Palace",
                trigger: "qtype",
              },
              {
                id: "12.4",
                message:
                  "Sree Padmanabhaswamy Temple, Napier Museum, Shangumugham BEACH, Attukal Bhagavathy Temple, Vellayani Lake",
                trigger: "qtype",
              },
              {
                id: "12.5",
                message:
                  "Kerala Art And Craft Village,Vizhinjam Beach, Aazhimala Shiva Temple, Sagarika Marine Research Aquarium",
                trigger: "qtype",
              },
              {
                id: "13.1",
                message:
                  "Government Botanical Garden, Tamilnadu Tourism Ooty Boat House,The Tea Factory & The Tea Museum, Ketti Valley View Point",
                trigger: "qtype",
              },
              {
                id: "13.2",
                message:
                  "Marina Beach,Government Museum Chennai,San Thome Cathedral Basilica,Arignar Anna Zoological Park,Edward Elliot's Beach",
                trigger: "qtype",
              },
              {
                id: "13.3",
                message:
                  "Meenakshi Amman Temple, Thirumalai Nayakkar Palace, Gandhi Memorial Museum,Arulmigu Kallalagar Temple, Allagar Temple,Samanar Jain Hills, Keelakuyilkudi",
                trigger: "qtype",
              },
              {
                id: "13.4",
                message:
                  "Thiruvalluvar Statue,Vivekananda Rock Memorial,Sarvani Shaktipeeth Shri Kanya Kumari Bhagavathy,Sarvani Shaktipeeth Shri Kanya Kumari Bhagavathy, Vattakottai Fort",
                trigger: "qtype",
              },
              {
                id: "8",
                message:
                  "Solapur Bhuikot Fort, Ekruk Lake, Solapur Science Centre, Shri Revan Siddeshwar Temple ",
                trigger: "qtype",
              },
              {
                id: "9",
                options: [
                  { value: 1, label: "Pune", trigger: "4" },
                  { value: 2, label: "Mumbai", trigger: "3" },
                  { value: 3, label: "Nashik", trigger: "5" },
                  { value: 4, label: "Aurangabad", trigger: "6" },
                  { value: 5, label: "Nanded", trigger: "7" },
                  { value: 6, label: "Solapur", trigger: "8" },
                ],
              },
              {
                id: "10",
                options: [
                  { value: 1, label: "Junagarh", trigger: "10.1" },
                  { value: 2, label: "Ahmedabad", trigger: "10.2" },
                  { value: 3, label: "Vadodra", trigger: "10.3" },
                  { value: 4, label: "Kutch", trigger: "10.4" },
                  { value: 5, label: "Dwarka", trigger: "10.5" },
                ],
              },
              {
                id: "11",
                options: [
                  { value: 1, label: "Jaipur", trigger: "11.1" },
                  { value: 2, label: "Jodhpur", trigger: "11.2" },
                  { value: 3, label: "Jaisalmer", trigger: "11.3" },
                  { value: 4, label: "Udaipur", trigger: "11.4" },
                  { value: 5, label: "Bikaner", trigger: "11.5" },
                ],
              },
              {
                id: "12",
                options: [
                  { value: 1, label: "Kochi", trigger: "12.1" },
                  { value: 2, label: "Munnar", trigger: "12.2" },
                  { value: 3, label: "Alappuzha", trigger: "11.3" },
                  { value: 4, label: "Thiruvananthapuram", trigger: "12.4" },
                  { value: 5, label: "Kovalam", trigger: "12.5" },
                ],
              },
              {
                id: "13",
                options: [
                  { value: 1, label: "Ooty", trigger: "13.1" },
                  { value: 2, label: "Chennai", trigger: "13.2" },
                  { value: 3, label: "Madurai", trigger: "13.3" },
                  { value: 4, label: "Kanyakumari", trigger: "13.4" },
                ],
              },
              {
                id: "q-submit",
                message: "Do you have any other questions?",
                trigger: "submit",
              },
              {
                id: "submit",
                options: [
                  { value: "y", label: "Yes", trigger: "no-submit" },
                  { value: "n", label: "No", trigger: "end-message" },
                ],
              },
              {
                id: "no-submit",
                options: [
                  { value: 1, label: "Pune", trigger: "4" },
                  { value: 2, label: "Mumbai", trigger: "3" },
                  { value: 3, label: "Nashik", trigger: "5" },
                  { value: 4, label: "Aurangabad", trigger: "6" },
                  { value: 5, label: "Nanded", trigger: "7" },
                  { value: 6, label: "Solapur", trigger: "8" },
                  { value: 7, label: "Maharashtra", trigger: "9" },
                  { value: 8, label: "Gujarat", trigger: "10" },
                  { value: 9, label: "Rajasthan", trigger: "11" },
                  { value: 10, label: "Kerala", trigger: "12" },
                  { value: 11, label: "Tamilnadu", trigger: "13" },
                ],
              },
              {
                id: "end-message",
                component: <Post />,
                asMessage: true,
                end: true,
              },
            ]}
            {...config}
          />
        </div>
        <div>
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}>
              +
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              -
            </button>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;
