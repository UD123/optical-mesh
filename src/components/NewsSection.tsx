import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import { newsItems, newsColors } from '@/data/newsItems';

const NewsSection = () => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Section id="news" className="bg-background" withDivider>
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Latest News</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto animate-fade-in">
          Stay updated with our latest research presentations, publications, and laboratory activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {newsItems.slice(0, 4).map((item, index) => (
          <div 
            key={item.id} 
            className="group flex gap-6 items-start bg-card border border-border p-4 hover:border-primary transition-all animate-fade-in cursor-pointer"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            onClick={() => navigate(`/news/${item.id}`)}
          >
            {/* Square Image/Color Block */}
            <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden bg-secondary">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full relative overflow-hidden"
                  style={{ backgroundColor: item.color ?? newsColors[index % newsColors.length] }}
                >
                  <span className="absolute bottom-0 left-0 text-white/90 font-sans font-bold text-lg leading-tight p-2">
                    {item.shortTitle}
                  </span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1">{formatDate(item.date)}</p>
              <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary leading-tight mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{item.summary}</p>
              <span className="text-primary text-xs font-bold mt-2 inline-flex items-center gap-1 group-hover:underline transition-colors">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default NewsSection;
