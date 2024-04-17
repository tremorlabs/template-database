import React from "react";
import Ycompany from "../../../public/Ycompany";

export default function Footer() {
  return (
    <footer className="my-40 bg-gray-50">
      <div className="flex justify-between gap-60 max-w-6xl mx-auto">
        <div className="flex flex-col gap-12">
          <Ycompany className="w-40" />
          <div>
            <span className="text-gray-500 text-sm">
              123 Market Street <br /> #1334 <br />
              New York, NY <br />
              United States{" "}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 flex-1 gap-20">
          <div>
            <h4 className="text-gray-900">Product</h4>
            <ul className="flex flex-col gap-2 mt-2 text-gray-500 hover:text-gray-900">
              <li>
                <a>Core</a>
              </li>
              <li>
                <a>Enterprise</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a>Docs</a>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500">Company</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a>Careers</a>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500">Social</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
