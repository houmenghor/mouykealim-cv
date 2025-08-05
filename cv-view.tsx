"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

export function CvView() {
  const cvRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">My Curriculum Vitae</h1>
        <div className="flex gap-2"></div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-0">
          <div ref={cvRef} className="p-8 max-w-4xl mx-auto">
            {/* CV Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold uppercase mb-2">LIM MOUYKEA</h1>
              <h2 className="text-xl font-semibold mb-4">WEB FRONTEND</h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-1">
                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">CONTACT</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>GMAIL:</strong> mouykealim2@gmail.com
                    </li>
                    <li>
                      <strong>PHONE:</strong> 010961434
                    </li>
                    <li>
                      <strong>TELEGRAM:</strong> @Lmmouykea
                    </li>
                    <li>
                      <strong>ADDRESS:</strong> Sangkat Tuek Thla, Khan Sen Sok, Phnom Penh, Cambodia
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">SKILLS</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>C, C++</li>
                    <li>OOP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>VueJs</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">LANGUAGE</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Khmer: Mother tongue</li>
                    <li>English: Medium</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">INTERESTS & HOBBIES</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Leisure:</strong> Learn new technology, coding, listen to music, reading book
                    </li>
                    <li>
                      <strong>Sport:</strong> Electronic sport
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">PERSONAL PROFILE</h3>
                  <p className="mb-4">
                    I'm Lim Mouykea. I was born in Kandal province in 2004. My goal is to keep getting better. I'll use
                    what I learn to create something practical for our everyday lives. Specifically, I wish to fulfill
                    my potential as a Full Stack Developer.
                  </p>
                  <p>
                    I am currently a second year IT student at Royal University of Phnom Penh. I looked at a lot of
                    different artifacts and they were all really complicated.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">EDUCATION</h3>
                  <ul className="space-y-3">
                    <li>
                      <div className="flex flex-col">
                        <span className="font-semibold">2023 - Until now</span>
                        <span>Pursuing a bachelor's degree in Information Technology at RUPP</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-semibold">2016 - 2022</span>
                        <span>Hun Sen Saang high school</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">PROJECTS</h3>
                  <ul className="space-y-3">
                    <li>
                      <div className="flex flex-col">
                        <span className="font-semibold">Electronic Shop Website</span>
                        <a
                          href="https://mouykealim.github.io/electronic-shop/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          https://mouykealim.github.io/electronic-shop/
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold border-b-2 border-primary pb-2 mb-3">PERSONAL DATA</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li>
                      <strong>Gender:</strong> Female
                    </li>
                    <li>
                      <strong>Nationality:</strong> Cambodia
                    </li>
                    <li>
                      <strong>Marriage Status:</strong> Single
                    </li>
                    <li>
                      <strong>Date of Birth:</strong> 19-10-2004
                    </li>
                    <li>
                      <strong>Place of birth:</strong> Portapang village, Svay rteal commune, Saang district, Kandal
                      province
                    </li>
                    <li>
                      <strong>Religion:</strong> Buddhism
                    </li>
                    <li>
                      <strong>Health:</strong> Good
                    </li>
                    <li>
                      <strong>Characteristics:</strong> Creative, friendly, honest
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
