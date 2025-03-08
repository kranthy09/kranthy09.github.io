"use client";

import React, { useEffect } from "react";

const InstagramReel = ({ url }) => {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== "undefined") {
      // Check if the script is already loaded
      if (!document.getElementById("instagram-embed-script")) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      } else {
        // If script is already loaded, process any new embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }
    }
  }, [url]);

  return (
    <div className="instagram-media-container">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "100%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={url}
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "12.5px",
                  width: "12.5px",
                  transform: "translateX(0px) translateY(7px)",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  height: "12.5px",
                  transform: "rotate(-45deg) translateX(3px) translateY(1px)",
                  width: "12.5px",
                  flexGrow: 0,
                  marginRight: "14px",
                  marginLeft: "2px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "12.5px",
                  width: "12.5px",
                  transform: "translateX(9px) translateY(-18px)",
                }}
              ></div>
            </div>
            <div style={{ marginLeft: "8px" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: "20px",
                  width: "20px",
                }}
              ></div>
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "2px solid transparent",
                  borderLeft: "6px solid #f4f4f4",
                  borderBottom: "2px solid transparent",
                  transform: "translateX(16px) translateY(-4px) rotate(30deg)",
                }}
              ></div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div
                style={{
                  width: "0px",
                  borderTop: "8px solid #F4F4F4",
                  borderRight: "8px solid transparent",
                  transform: "translateY(16px)",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  flexGrow: 0,
                  height: "12px",
                  width: "16px",
                  transform: "translateY(-4px)",
                }}
              ></div>
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "8px solid #F4F4F4",
                  borderLeft: "8px solid transparent",
                  transform: "translateY(-4px) translateX(8px)",
                }}
              ></div>
            </div>
          </a>
          <p style={{ margin: "8px 0 0 0", padding: "0 4px" }}>
            <a
              href={url}
              style={{
                color: "#000",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View this Reel on Instagram
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramReel;
