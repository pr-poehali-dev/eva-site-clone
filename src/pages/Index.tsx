import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const blogPosts = [
  {
    id: 1,
    title: 'Минимализм в современном дизайне',
    excerpt: 'Как простота форм и чистота линий создают глубокое визуальное впечатление.',
    date: '15 октября 2024',
    category: 'Дизайн',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Типографика как искусство',
    excerpt: 'Шрифты говорят больше слов. Исследуем силу правильной типографики.',
    date: '8 октября 2024',
    category: 'Типографика',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Баланс света и тени',
    excerpt: 'Контрасты в веб-дизайне: создание глубины через минималистичные решения.',
    date: '1 октября 2024',
    category: 'Философия',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'Архитектура цифровых пространств',
    excerpt: 'Строим виртуальные миры с вниманием к деталям и пользовательскому опыту.',
    date: '24 сентября 2024',
    category: 'UX/UI',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'Эстетика пустого пространства',
    excerpt: 'Белое пространство — не пустота, а активный элемент композиции.',
    date: '17 сентября 2024',
    category: 'Дизайн',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Ритм и гармония в интерфейсах',
    excerpt: 'Создание визуального ритма через повторение и вариации элементов.',
    date: '10 сентября 2024',
    category: 'UX/UI',
    image: '/placeholder.svg'
  }
];

const categories = ['Все', 'Дизайн', 'Типографика', 'Философия', 'UX/UI'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const filteredPosts = selectedCategory === 'Все' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#hero" className="font-serif text-2xl font-semibold tracking-tight">
            Eva
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Блог
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Простота —<br />это сложность
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Исследуем минимализм, типографику и искусство цифрового дизайна
          </p>
          <div className="mt-12">
            <Button 
              size="lg" 
              className="rounded-full px-8 font-normal"
              onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Читать статьи
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <span className="text-xs text-primary">{post.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-sm font-medium flex items-center gap-2 group/link">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-5xl mb-4">Свяжитесь со мной</h2>
            <p className="text-muted-foreground">
              Открыт для сотрудничества и новых проектов
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div>
              <Input 
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-border bg-white"
                required
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-border bg-white"
                required
              />
            </div>
            <div>
              <Textarea 
                placeholder="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-border bg-white min-h-[150px] resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full font-normal">
              Отправить сообщение
            </Button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Eva. Создано с вниманием к деталям.</p>
        </div>
      </footer>
    </div>
  );
}
