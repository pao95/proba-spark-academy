import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Message } from "./types";
import { aiChatStyles } from "./styles";
import { Button, Icon, Text, Avatar, Textarea } from "@/components/atoms";

export const AIChat = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: t("aiChat.title"),
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content: `Great question about "${inputMessage}"! Let me help you understand this concept:\n\n1. **Definition**: [Concept explanation would go here]\n\n2. **Key Points**: \n   • Point 1 about the concept\n   • Point 2 with practical application\n   • Point 3 with common misconceptions\n\n3. **Example**: [A practical example demonstrating the concept]\n\n4. **Related Topics**: You might also want to explore [related concepts]\n\nWould you like me to elaborate on any of these points or help you with a specific problem?`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={aiChatStyles.container}>
      <div className={aiChatStyles.header}>
        <Text variant="h2" className={aiChatStyles.title}>
          {t("aiChat.title")}
        </Text>
        <Text className={aiChatStyles.subtitle}>{t("aiChat.title")}</Text>
      </div>

      <div className={aiChatStyles.chatContainer}>
        <div className={aiChatStyles.messagesContainer}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${aiChatStyles.messageItem.base} ${
                message.type === "user" ? aiChatStyles.messageItem.user : ""
              }`}
            >
              <Avatar
                className={`${aiChatStyles.avatar.base} ${
                  message.type === "user"
                    ? aiChatStyles.avatar.user
                    : aiChatStyles.avatar.ai
                }`}
                fallback={message.type === "user" ? "U" : "AI"}
              />

              <div
                className={`${aiChatStyles.messageContent.base} ${
                  message.type === "user"
                    ? aiChatStyles.messageContent.user
                    : ""
                }`}
              >
                <div
                  className={`${aiChatStyles.messageBubble.base} ${
                    message.type === "user"
                      ? aiChatStyles.messageBubble.user
                      : aiChatStyles.messageBubble.ai
                  }`}
                >
                  <pre className={aiChatStyles.messageText}>
                    {message.content}
                  </pre>
                </div>
                <Text size="xs" className={aiChatStyles.timestamp}>
                  {message.timestamp.toLocaleTimeString()}
                </Text>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className={aiChatStyles.loadingContainer}>
              <Avatar
                className={`${aiChatStyles.avatar.base} ${aiChatStyles.avatar.ai}`}
                fallback="AI"
              />
              <div className={aiChatStyles.loadingBubble}>
                <div className={aiChatStyles.loadingDots}>
                  <div className={aiChatStyles.loadingDot.base}></div>
                  <div
                    className={`${aiChatStyles.loadingDot.base} ${aiChatStyles.loadingDot.delay1}`}
                  ></div>
                  <div
                    className={`${aiChatStyles.loadingDot.base} ${aiChatStyles.loadingDot.delay2}`}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={aiChatStyles.inputContainer}>
          <div className={aiChatStyles.inputWrapper}>
            <Textarea
              value={inputMessage}
              onChange={setInputMessage}
              onKeyPress={handleKeyPress}
              placeholder={t("aiChat.placeholder")}
              className={aiChatStyles.textarea}
              rows={2}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className={aiChatStyles.sendButton}
            >
              <Icon icon={Send} size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
