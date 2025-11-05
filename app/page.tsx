'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-whatsapp-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-xl font-bold text-gray-900 dark:text-white">SalesAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-whatsapp-500 transition">Features</a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-whatsapp-500 transition">Pricing</a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-whatsapp-500 transition">Testimonials</a>
              <button className="bg-whatsapp-500 text-white px-6 py-2 rounded-lg hover:bg-whatsapp-600 transition font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center bg-whatsapp-100 dark:bg-whatsapp-900/30 text-whatsapp-700 dark:text-whatsapp-400 px-4 py-2 rounded-full mb-6">
              <span className="animate-pulse mr-2">🚀</span>
              <span className="text-sm font-medium">AI-Powered Sales Automation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Turn WhatsApp Into Your
              <span className="text-whatsapp-500 block mt-2">Sales Powerhouse</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Automate conversations, qualify leads, and close deals 24/7 with our intelligent AI sales agent.
              No coding required. Setup in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="bg-whatsapp-500 text-white px-8 py-4 rounded-lg hover:bg-whatsapp-600 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Free Trial
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-lg hover:border-whatsapp-500 transition font-semibold text-lg">
                Watch Demo
              </button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-whatsapp-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                No credit card
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-whatsapp-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                14-day trial
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-whatsapp-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-whatsapp-500 mb-2">10x</div>
              <div className="text-gray-600 dark:text-gray-400">Faster Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-whatsapp-500 mb-2">87%</div>
              <div className="text-gray-600 dark:text-gray-400">Lead Conversion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-whatsapp-500 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-whatsapp-500 mb-2">5K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Scale Sales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to automate your sales process and maximize conversions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Conversations',
                description: 'Natural language processing that understands context and responds like a human sales rep'
              },
              {
                icon: '⚡',
                title: 'Instant Lead Qualification',
                description: 'Automatically qualify leads based on your criteria and route hot prospects to your team'
              },
              {
                icon: '📊',
                title: 'Analytics Dashboard',
                description: 'Track conversations, conversion rates, and revenue in real-time with detailed insights'
              },
              {
                icon: '🔗',
                title: 'CRM Integration',
                description: 'Seamlessly sync with Salesforce, HubSpot, Pipedrive and 50+ other tools'
              },
              {
                icon: '🌍',
                title: 'Multi-Language Support',
                description: 'Communicate with customers in 100+ languages automatically'
              },
              {
                icon: '🎯',
                title: 'Smart Follow-ups',
                description: 'Never miss a deal with automated, personalized follow-up messages'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No technical knowledge required. Setup takes less than 5 minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Connect WhatsApp',
                description: 'Link your WhatsApp Business account with a simple QR code scan'
              },
              {
                step: '2',
                title: 'Train Your AI',
                description: 'Upload your product info and sales scripts. Our AI learns your business instantly'
              },
              {
                step: '3',
                title: 'Start Selling',
                description: 'Your AI agent handles conversations while you focus on closing deals'
              }
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-2/3 w-1/3 h-0.5 bg-whatsapp-300 dark:bg-whatsapp-700"></div>
                )}
                <div className="bg-whatsapp-500 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$49',
                period: '/month',
                features: [
                  '1,000 conversations/month',
                  'Basic AI responses',
                  'Email support',
                  'CRM integration',
                  'Analytics dashboard'
                ],
                cta: 'Start Free Trial',
                popular: false
              },
              {
                name: 'Professional',
                price: '$149',
                period: '/month',
                features: [
                  '10,000 conversations/month',
                  'Advanced AI & custom training',
                  'Priority support',
                  'All integrations',
                  'Advanced analytics',
                  'Multi-language support',
                  'Custom workflows'
                ],
                cta: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: [
                  'Unlimited conversations',
                  'Dedicated AI training',
                  '24/7 phone support',
                  'Custom integrations',
                  'White-label option',
                  'Dedicated account manager',
                  'SLA guarantee'
                ],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-4 ring-whatsapp-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-whatsapp-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <svg className="w-6 h-6 text-whatsapp-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-whatsapp-500 text-white hover:bg-whatsapp-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See what our customers have to say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Sales Director, TechCorp',
                content: 'Our conversion rate jumped 3x in the first month. The AI handles routine questions perfectly, letting my team focus on high-value deals.',
                avatar: '👩‍💼'
              },
              {
                name: 'Michael Chen',
                role: 'Founder, EcomStore',
                content: 'I was skeptical at first, but this tool pays for itself 10x over. It\'s like having a sales team that never sleeps.',
                avatar: '👨‍💻'
              },
              {
                name: 'Emily Rodriguez',
                role: 'VP Sales, GrowthHub',
                content: 'Setup was incredibly easy and the results were immediate. We\'re now handling 5x more leads with the same team size.',
                avatar: '👩‍🚀'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-whatsapp-500 to-whatsapp-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to 10x Your Sales?
          </h2>
          <p className="text-xl text-whatsapp-50 mb-10">
            Join thousands of businesses already using AI to automate their WhatsApp sales
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition font-semibold whitespace-nowrap"
              >
                Start Free Trial
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-white font-medium">✓ Thanks! We'll be in touch soon.</p>
            )}
          </form>
          <p className="text-whatsapp-100 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-whatsapp-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-xl font-bold text-white">SalesAI</span>
              </div>
              <p className="text-sm">Automate your WhatsApp sales with AI-powered conversations.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-whatsapp-500 transition">Features</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Integrations</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-whatsapp-500 transition">About</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Careers</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-whatsapp-500 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Terms</a></li>
                <li><a href="#" className="hover:text-whatsapp-500 transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>© 2024 SalesAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
