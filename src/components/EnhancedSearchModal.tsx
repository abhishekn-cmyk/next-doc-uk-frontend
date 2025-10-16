import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useTools } from "@/hooks/useTools"; // your hook
import type { ITool } from "@/types/tool"; // import your Tool type

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnhancedSearchModal: React.FC<SearchModalProps> = ({ open, onOpenChange }) => {
  const { data: tools = [] } = useTools();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Take last 4 tools
  const lastTools = tools.slice(-4);

  // Filter tools based on query
  const filteredResults = lastTools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    (tool.description || "").toLowerCase().includes(query.toLowerCase()) ||
    (tool.category || "").toLowerCase().includes(query.toLowerCase())
  );

  // Group tools by category
  const groupedResults = filteredResults.reduce((acc, tool) => {
    const category = tool.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(tool);
    return acc;
  }, {} as Record<string, ITool[]>);

  const handleSelect = (tool: ITool) => {
    navigate(`/tool/${tool.name}`);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search tools..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-[400px] overflow-auto">
        <CommandEmpty>
          <div className="text-center py-6">
            <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No results found for "{query}"</p>
          </div>
        </CommandEmpty>

        {Object.entries(groupedResults).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((tool) => (
              <CommandItem
                key={tool._id}
                value={tool.name}
                onSelect={() => handleSelect(tool)}
                className="flex items-center gap-3 px-4 py-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{tool.name}</span>
                    {tool.tagline && (
                      <Badge variant="secondary" className="text-xs">
                        {tool.tagline}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};


export { EnhancedSearchModal };
