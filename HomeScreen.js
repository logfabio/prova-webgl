import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
// import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import PDFFile from "../components/PdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const HomeScreen = () => {
  return (
    <>
      {/* <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink> */}
      <PDFFile />
    </>
  );
};

export default HomeScreen;
