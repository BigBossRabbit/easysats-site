import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Shield, 
  DollarSign, 
  Users, 
  BookOpen, 
  ExternalLink, 
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const TimeForce = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/easysats-logo.png" alt="EasySats" className="h-10 w-10" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-xl font-bold">
                  <span className="text-primary">easy</span>
                  <span className="text-foreground">sats</span>
                  <span className="text-muted-foreground animate-pulse">_</span>
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">~/home</Link>
              <Link to="/freedomtech" className="text-muted-foreground hover:text-primary transition-colors">~/freedomtech</Link>
              <Link to="/timeforce" className="text-primary">~/timeforce</Link>
              <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">~/jobs</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
            <span className="text-primary">$</span>
            <span className="animate-pulse">loading_timeforce_handbook...</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-primary">&gt;</span> TimeForce
            <br />
            <span className="text-primary">&gt;</span> Orange Pill
            <br />
            <span className="text-primary">&gt;</span> Handbook
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured approach to onboarding business owners with Bitcoin solutions. 
            Keep it simple, stay confident, and help others understand the power of true financial freedom.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Users className="h-4 w-4" />
              Join TimeForce
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Link to="/jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Find Bitcoin Jobs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Shield className="h-6 w-6" />
              <span className="text-2xl font-bold">The Problem</span>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Many tend to complicate the easiest parts about Bitcoin when most will come to 
                understand it the easiest by the use cases it solves.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Banking Overreach</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>Monthly banking charges for storing money</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>Additional fees for missed payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>No warning or arrangement opportunities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Security Risks</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>Risk of robbery for cash transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>Shady bookkeepers and bad actors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">•</span>
                      <span>System with no say yet continued payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&gt;</span> The Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Three key Bitcoin solutions that solve the problems above
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ease of Usage */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Ease of Usage</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have ever used cell phone banking or recharged your cell phone with airtime, 
                then you can receive, send & store Bitcoin by yourself.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Be your own bank</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>No permission needed to transact</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Simple QR Code payments</span>
                </li>
              </ul>
            </div>

            {/* True Ownership */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">True Ownership</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Unlike your bank account, your Bitcoin Application (Wallet) is owned by you 
                if you choose to use Self-Custody.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Full ownership & responsibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Seed Phrase = Master Key</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Safer for vendors - no cash exchange</span>
                </li>
              </ul>
            </div>

            {/* Additional Revenue Stream */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Additional Revenue Stream</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Accepting Bitcoin opens doors to new customers and revenue opportunities 
                beyond traditional payment methods.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Serve customers without Namibian Dollars</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Enable Bitcoin earners to spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>Expand customer base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="container mx-auto px-6 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&gt;</span> The Opportunity
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the #EasySats Bitcoin Voucher Network
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Bitcoin Vouchers</h3>
              </div>
              <p className="text-muted-foreground">
                We don't sell Bitcoin, we sell Bitcoin Vouchers. These Vouchers are identical 
                to Mobile Airtime Vouchers like MTC or TN Mobile Vouchers, with the added ease 
                of being able to scan a QR Code for redemption.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Familiar voucher system</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>QR Code redemption</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Set your own prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Global visibility on map</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/10 border border-primary rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Profit Share Progression</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">0-10 Sub-vendors</span>
                  <span className="font-semibold text-primary">70% EasySats / 30% You</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">11-20 Sub-vendors</span>
                  <span className="font-semibold text-primary">60% EasySats / 40% You</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">20+ Sub-vendors</span>
                  <span className="font-semibold text-primary">50% EasySats / 50% You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&gt;</span> Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Educational materials to deepen your Bitcoin knowledge
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Free Books</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Inventing Bitcoin</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-3 w-3" />
                    Read
                  </Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>The Simple Bitcoin Book Ever Written</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-3 w-3" />
                    Read
                  </Button>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Education & Articles</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>A Look at the Lightning Network</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-3 w-3" />
                    Read
                  </Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>The Saylor Academy - Bitcoin for Everybody</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-3 w-3" />
                    Enroll
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" className="gap-2">
              <Globe className="h-4 w-4" />
              Visit okinent.com
            </Button>
          </div>
        </div>
      </section>

      {/* Sub-Vendor Signup Section */}
      <section className="container mx-auto px-6 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">&gt;</span> Join TimeForce
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to become a Sub-Vendor? Sign up directly through our platform below.
            </p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-8">
            <div className="mb-6 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">EasySats Integrations</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Register for BTCPay Server access - secure, private, and censorship-resistant Bitcoin payments
              </p>
            </div>
            
            {/* Registration Form Section */}
            <div className="w-full">
              {/* Show fallback immediately since iframe will be blocked */}
              <div className="text-center p-8 bg-background border border-border rounded-lg">
                <div className="mb-6">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">EasySats BTCPay Server Registration</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Register for secure, private, and censorship-resistant Bitcoin payment processing. 
                    Click below to access our registration form.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://easysats.okinent.org/register" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Register for BTCPay Server
                  </a>
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">What you'll get:</p>
                    <ul className="space-y-1 text-left max-w-sm mx-auto">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Self-hosted Bitcoin payment processor
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Secure and private transactions
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Censorship-resistant payments
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Completely free to use
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Having trouble with the form? 
                <a 
                  href="https://easysats.okinent.org/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  Open in new tab
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeForce;
