import { Button } from "@/components/ui/button";
import { Terminal, Code2, GitBranch, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const FreedomTech = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/easysats-logo.png" alt="EasySats" className="h-10 w-10" />
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-xl font-bold">
                  <span className="text-primary">easy</span>
                  <span className="text-foreground">sats</span>
                  <span className="text-muted-foreground animate-pulse">_</span>
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">~/home</Link>
              <Link to="/freedomtech" className="text-primary">~/freedomtech</Link>
              <Link to="/timeforce" className="text-muted-foreground hover:text-primary transition-colors">~/timeforce</Link>
              <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">~/jobs</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="text-primary">$</span>
              <span className="animate-pulse">loading_open_source_opportunities...</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-primary">&gt;</span> FreedomTech
              <br />
              <span className="text-primary">&gt;</span> Open Source
              <br />
              <span className="text-primary">&gt;</span> Opportunities
            </h1>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Code2 className="h-5 w-5" />
              <span className="font-semibold">// About FreedomTech</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Explore open source projects and opportunities in the Bitcoin and freedom technology space. 
              Contribute to building a more sovereign future through code, design, and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-primary text-sm mb-2">
            <Terminal className="h-4 w-4" />
            <span>cat opportunities.json</span>
          </div>
          <h2 className="text-3xl font-bold">Available Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
            <div className="flex items-center justify-between mb-4">
              <Github className="h-8 w-8 text-primary" />
              <span className="text-xs text-muted-foreground font-mono">OPEN</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Open Source Project 1</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Description of the open source opportunity will go here.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-3 w-3" />
                View Project
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
            <div className="flex items-center justify-between mb-4">
              <GitBranch className="h-8 w-8 text-primary" />
              <span className="text-xs text-muted-foreground font-mono">OPEN</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Open Source Project 2</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Description of the open source opportunity will go here.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-3 w-3" />
                View Project
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card border border-primary/50 rounded-lg p-6">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Terminal className="h-5 w-5" />
            <span className="font-semibold">// Want to submit a project?</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Have an open source Bitcoin or freedom tech project? We'd love to feature it here.
          </p>
          <Button className="gap-2">
            <Code2 className="h-4 w-4" />
            Submit Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FreedomTech;


