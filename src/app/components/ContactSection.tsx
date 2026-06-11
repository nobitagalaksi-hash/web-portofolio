import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MailIcon, LinkedinIcon, GithubIcon, SendIcon } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontak" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Mari Terhubung</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk
            menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:aryaputrarahmandhika@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group border border-transparent hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-cyan-500/20 transition-colors">
                    <MailIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">aryaputrarahmandhika@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/arya-putra111067/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group border border-transparent hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-cyan-500/20 transition-colors">
                    <LinkedinIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/arya-putra111067/</p>
                  </div>
                </a>

                <a
                  href="https://github.com/nobitagalaksi-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group border border-transparent hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-cyan-500/20 transition-colors">
                    <GithubIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">github.com/nobitagalaksi-hash</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nama</Label>
                  <Input
                    id="contact-name"
                    placeholder="Nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="aryaputrarahmandhika@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Pesan</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 shadow-lg shadow-primary/30"
                >
                  <SendIcon />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
