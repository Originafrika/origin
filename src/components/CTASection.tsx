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
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
              Votre aventure commence ici
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Inscrivez-vous et devenez un Visionnaire ORIGIN
            </p>
          </div>

          {/* Form */}
          <div className="bg-muted/30 p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-border animate-scale-in">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">
                    Votre nom
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 sm:h-12 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Votre email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 sm:h-12 pl-10 sm:pl-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-sm sm:text-base py-5 sm:py-6 hover-lift"
                >
                  Rejoindre la communauté
                </Button>

                {/* Bonus */}
                <div className="pt-3 sm:pt-4 space-y-2">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center">
                    En vous inscrivant, vous obtenez :
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground flex-shrink-0" />
                      <span>Accès anticipé aux outils ORIGIN</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground flex-shrink-0" />
                      <span>Invitation aux challenges et hackathons exclusifs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground flex-shrink-0" />
                      <span>Badge exclusif "Visionnaire ORIGIN"</span>
                    </li>
                  </ul>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-foreground text-background">
                  <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Bienvenue parmi nous !</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-2">
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
