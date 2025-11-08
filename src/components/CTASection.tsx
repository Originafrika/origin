import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Bienvenue dans la communauté ORIGIN ! 🎉",
      description: "Vous recevrez bientôt un email avec votre accès anticipé.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail("");
      setName("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Votre aventure commence ici
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Inscrivez-vous et devenez un Visionnaire ORIGIN
            </p>
          </div>

          {/* Form */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-2xl border-2 border-border animate-scale-in">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Votre nom
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Votre email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 pl-11 text-base"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base py-6 hover-lift"
                >
                  Rejoindre la communauté
                </Button>

                {/* Bonus */}
                <div className="pt-4 space-y-2">
                  <p className="text-sm text-muted-foreground text-center">
                    En vous inscrivant, vous obtenez :
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0" />
                      <span>Accès anticipé aux outils ORIGIN</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0" />
                      <span>Invitation aux challenges et hackathons exclusifs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0" />
                      <span>Badge exclusif "Visionnaire ORIGIN"</span>
                    </li>
                  </ul>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Bienvenue parmi nous !</h3>
                <p className="text-muted-foreground">
                  Consultez votre boîte mail pour les prochaines étapes
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
