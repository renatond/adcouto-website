import asyncio
import os
from pathlib import Path
from urllib.parse import urlparse
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig


async def scrape_urls(urls, output_dir):
    """
    Scrape a list of URLs and save both HTML and Markdown content.
    
    Args:
        urls: List of URLs to scrape
        output_dir: Directory to save the scraped content
    """
    # Create output directory if it doesn't exist
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    # Configure browser and crawler
    browser_config = BrowserConfig()
    run_config = CrawlerRunConfig()
    
    async with AsyncWebCrawler(config=browser_config) as crawler:
        for url in urls:
            print(f"Scraping: {url}")
            
            try:
                # Crawl the URL
                result = await crawler.arun(url=url, config=run_config)
                
                if result.success:
                    # Create a safe filename from the URL
                    parsed_url = urlparse(url)
                    path_parts = parsed_url.path.strip('/').split('/')
                    
                    # Use domain + path for filename, or just domain for home page
                    if path_parts and path_parts[0]:
                        filename = '_'.join(path_parts)
                    else:
                        filename = 'home'
                    
                    # Save HTML
                    html_path = os.path.join(output_dir, f"{filename}.html")
                    with open(html_path, 'w', encoding='utf-8') as f:
                        f.write(result.html)
                    print(f"  ✓ Saved HTML to: {html_path}")
                    
                    # Save Markdown
                    md_path = os.path.join(output_dir, f"{filename}.md")
                    with open(md_path, 'w', encoding='utf-8') as f:
                        # Use raw_markdown if available, otherwise use the markdown property
                        markdown_content = result.markdown
                        if hasattr(markdown_content, 'raw_markdown'):
                            f.write(markdown_content.raw_markdown)
                        else:
                            f.write(str(markdown_content))
                    print(f"  ✓ Saved Markdown to: {md_path}")
                    
                else:
                    print(f"  ✗ Failed to scrape {url} - Status: {result.status_code}")
                    
            except Exception as e:
                print(f"  ✗ Error scraping {url}: {str(e)}")
            
            print()


def read_sitemap(sitemap_path):
    """Read URLs from sitemap file."""
    urls = []
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and line.startswith('http'):
                urls.append(line)
    return urls


async def main():
    # Configuration
    sitemap_file = 'sitemap.txt'
    output_directory = 'scraped-htmls'
    
    print(f"Reading URLs from {sitemap_file}...\n")
    urls = read_sitemap(sitemap_file)
    
    print(f"Found {len(urls)} URLs to scrape")
    print(f"Output directory: {output_directory}\n")
    print("-" * 60)
    print()
    
    # Scrape all URLs
    await scrape_urls(urls, output_directory)
    
    print("-" * 60)
    print(f"\n✓ Scraping complete! Files saved to '{output_directory}' folder")


if __name__ == "__main__":
    asyncio.run(main())


