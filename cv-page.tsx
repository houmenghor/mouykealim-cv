import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Globe, Download, Github, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl font-bold text-gray-600">
                JD
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                <p className="text-xl text-gray-600 mb-4">Senior Software Engineer</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>john.doe@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>johndoe.dev</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Experienced Senior Software Engineer with 8+ years of expertise in full-stack development, cloud
                  architecture, and team leadership. Proven track record of delivering scalable solutions and mentoring
                  junior developers. Passionate about clean code, modern technologies, and continuous learning.
                </p>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">Senior Software Engineer</h3>
                      <p className="text-gray-600">TechCorp Inc.</p>
                    </div>
                    <span className="text-sm text-gray-500">2020 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Led development of microservices architecture serving 1M+ users</li>
                    <li>Mentored team of 5 junior developers and conducted code reviews</li>
                    <li>Improved application performance by 40% through optimization</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">Software Engineer</h3>
                      <p className="text-gray-600">StartupXYZ</p>
                    </div>
                    <span className="text-sm text-gray-500">2018 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Developed full-stack web applications using React and Node.js</li>
                    <li>Collaborated with design team to implement responsive UI/UX</li>
                    <li>Built RESTful APIs and integrated third-party services</li>
                    <li>Participated in agile development processes and sprint planning</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">Junior Developer</h3>
                      <p className="text-gray-600">WebSolutions Ltd.</p>
                    </div>
                    <span className="text-sm text-gray-500">2016 - 2018</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Maintained and enhanced existing web applications</li>
                    <li>Fixed bugs and implemented new features based on requirements</li>
                    <li>Learned modern development practices and frameworks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Key Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">E-commerce Platform</h3>
                  <p className="text-gray-700 mb-2">
                    Built a scalable e-commerce platform handling 10K+ daily transactions using React, Node.js, and
                    PostgreSQL. Implemented payment processing and inventory management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-2">Real-time Analytics Dashboard</h3>
                  <p className="text-gray-700 mb-2">
                    Developed a real-time analytics dashboard with WebSocket connections, data visualization, and
                    automated reporting features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Socket.io</Badge>
                    <Badge variant="secondary">D3.js</Badge>
                    <Badge variant="secondary">Redis</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Python</Badge>
                    <Badge>Java</Badge>
                    <Badge>Go</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Vue.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Django</Badge>
                    <Badge>FastAPI</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Redis</Badge>
                    <Badge>MySQL</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-gray-600">University of Technology</p>
                    <p className="text-sm text-gray-500">2012 - 2016</p>
                    <p className="text-sm text-gray-600">GPA: 3.8/4.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">AWS Solutions Architect</h4>
                    <p className="text-xs text-gray-500">Amazon Web Services - 2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Certified Kubernetes Administrator</h4>
                    <p className="text-xs text-gray-500">CNCF - 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Google Cloud Professional</h4>
                    <p className="text-xs text-gray-500">Google Cloud - 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-sm text-gray-500">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spanish</span>
                    <span className="text-sm text-gray-500">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span className="text-sm text-gray-500">Intermediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
